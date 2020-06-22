import React from 'react';
import './App.css';
import { Dropdown, Label } from 'semantic-ui-react'
import { DisplayConstraintOptions, AIConfig } from './const';
import { findOverlayLocation, captureVideoImageToCanvas } from './util';
import { ScalableSemanticSegmentation } from 'scalable-semantic-segmentation-js'

interface AppState{
  count: number,
  videoResolution:string,
  colnum:number,
  rownum:number,
  showRect:boolean,
  showSS:boolean,
  showGrid:boolean,
  initialized: boolean,
}

class App extends React.Component {
  state: AppState = {
      count: 0,
      videoResolution: "VGA",
      colnum: 1,
      rownum: 1,
      showRect: true,
      showSS: false,
      showGrid: false,
      initialized: false,
  }

  ////////////////////
  // HTML Component //
  ////////////////////
  parentRef = React.createRef<HTMLDivElement>()
  videoRef  = React.createRef<HTMLVideoElement>()
  controllerCanvasRef = React.createRef<HTMLCanvasElement>()
  controllerDivRef = React.createRef<HTMLDivElement>()
  workerSSMaskMonitorCanvasRef = React.createRef<HTMLCanvasElement>()
  ////////////////////
  // Component Size //
  ////////////////////
  videoHeight = 0
  videoWidth = 0
  parentHeight = 0
  parentWidth = 0

  overlayWidth = 0
  overlayHeight = 0
  overlayXOffset = 0
  overlayYOffset = 0

  scalableSS:ScalableSemanticSegmentation = new ScalableSemanticSegmentation()

  /**
   * ワーカーの初期化
   */
  async initWorker() {
      // SemanticSegmentation 用ワーカー
      this.scalableSS.addInitializedListener(()=>{
          const props = this.props as any
          this.setState({initialized:true})
          this.requestScanBarcode()
      })
      this.scalableSS.addMaskPredictedListeners((maskBitmap:ImageBitmap)=>{
          // 再キャプチャ
          this.requestScanBarcode()

      })

      this.scalableSS.init(AIConfig.SS_MODEL_PATH, AIConfig.SPLIT_WIDTH, AIConfig.SPLIT_HEIGHT, AIConfig.SPLIT_MARGIN)
      return
  }

  /**
   * HTMLコンポーネントに位置計算
   */
  private checkParentSizeChanged(video: HTMLVideoElement) {
      // サイズ算出
      this.videoHeight = video.videoHeight
      this.videoWidth  = video.videoWidth

      let parentHeight = video.getBoundingClientRect().bottom - video.getBoundingClientRect().top
      const parentWidth  = video.getBoundingClientRect().right - video.getBoundingClientRect().left

      parentHeight = (parentWidth/this.videoWidth) * this.videoHeight

      this.parentHeight = parentHeight
      this.parentWidth = parentWidth
      const { overlayWidth, overlayHeight, overlayXOffset, overlayYOffset } = findOverlayLocation(this.parentWidth, this.parentHeight, this.videoWidth, this.videoHeight)
      this.overlayWidth = overlayWidth
      this.overlayHeight = overlayHeight
      this.overlayXOffset = overlayXOffset
      this.overlayYOffset = overlayYOffset


      this.workerSSMaskMonitorCanvasRef.current!.width  = this.overlayWidth
      this.workerSSMaskMonitorCanvasRef.current!.height = this.overlayHeight
      this.controllerCanvasRef.current!.width  = this.overlayWidth
      this.controllerCanvasRef.current!.height = this.overlayHeight
  }

  /**
   * マウント時の処理
   * モデルのロード、カメラの準備ができたらイベント発行する
   */
  componentDidMount() {
      console.log('Initializing')

      const initWorkerPromise = this.initWorker()

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const webCamPromise = navigator.mediaDevices
              .getUserMedia({
                  audio: false,
                  video: DisplayConstraintOptions[this.state.videoResolution]
              })
              .then(stream => {
                  console.log(this.videoRef)
                  this.videoRef.current!.srcObject = stream;
                  return new Promise((resolve, reject) => {
                      this.videoRef.current!.onloadedmetadata = () => {
                          resolve();
                      };
                  });
              });
          
          Promise.all([initWorkerPromise, webCamPromise])
              .then((res) => {
                  console.log('Camera and model ready!')
              })
              .catch(error => {
                  console.error(error);
              });
      }           
  }

  changeCameraResolution = (resolution:string) =>{
      (this.videoRef.current!.srcObject as MediaStream ).getTracks().map(s=>s.stop())
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const webCamPromise = navigator.mediaDevices
              .getUserMedia({
                  audio: false,
                  video: DisplayConstraintOptions[resolution]
              })
              .then(stream => {
                  console.log(this.videoRef)
                  this.videoRef.current!.srcObject = stream;
                  return new Promise((resolve, reject) => {
                      this.videoRef.current!.onloadedmetadata = () => {
                          resolve();
                      };
                  });
              });
          
          Promise.all([webCamPromise])
              .then((res) => {
                  console.log('Camera and model ready!')
                  const video = this.videoRef.current!
                  this.checkParentSizeChanged(video)
                  this.setState({videoResolution:resolution})
              })
              .catch(error => {
                  console.error(error);
              });
      }           
  }


  requestScanBarcode = async () => {
      console.log('requestScanBarcode')
      const video = this.videoRef.current!
      const controller = this.controllerCanvasRef.current!
      controller.width = this.overlayWidth
      controller.height = this.overlayHeight

      const captureCanvas = captureVideoImageToCanvas(video)
      if(captureCanvas.width === 0){
          captureCanvas.remove()
          window.requestAnimationFrame(this.requestScanBarcode);
          return
      }
      this.scalableSS.predict(captureCanvas, this.state.colnum, this.state.rownum, AIConfig.SPLIT_MARGIN)
      captureCanvas.remove()
  }


  render() {
      const video = this.videoRef.current!

      if(this.state.initialized === true){
          console.log('initialized')
          this.checkParentSizeChanged(video)
      }

      const constraints = Object.keys(DisplayConstraintOptions)
      const constraintOptions = constraints.map(v =>{
          return {key:v, text:v, value:v}
      })

      const colnumOptionList = [1,2,3]
      const colnumOptions = colnumOptionList.map(v =>{
          return {key:v, text:v, value:v}
      })
      const rownumOptionList = [1,2,3]
      const rownumOptions = rownumOptionList.map(v =>{
          return {key:v, text:v, value:v}
      })

      return (
          <div style={{ width: "100%", height: this.parentHeight, position: "relative", top: 0, left: 0, }} ref={this.parentRef} >
              <video
                  autoPlay
                  playsInline
                  muted
                  ref={this.videoRef}
                  //style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width:this.overlayWidth, height:this.overlayHeight}}
                  
                  style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, }}
              />
              <canvas
                  ref = {this.workerSSMaskMonitorCanvasRef}
                  style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width:this.parentWidth, height:this.parentHeight}}
              />
              <canvas
                  ref={this.controllerCanvasRef}
                  style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width:this.parentWidth, height:this.parentHeight}}
              />


              <div 
                  ref={this.controllerDivRef}
                  style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width:this.parentWidth, height:this.parentHeight}}
              >
                  <Dropdown text='Resolution' options={constraintOptions } simple item onChange={(e, { value }) => {
                      this.changeCameraResolution(value as string)
                  }}/>
                  <Dropdown text='col' options={colnumOptions} simple item  onChange={(e, { value }) => {
                      this.setState({colnum:value as number})
                  }}/>
                  <Dropdown text='row' options={rownumOptions} simple item onChange={(e, { value }) => {
                      this.setState({rownum:value as number})
                  }}/>
                  <Label basic size="tiny" color={this.state.showSS?"red":"grey"} onClick={()=>{
                      const newValue = !this.state.showSS
                      this.scalableSS.previewCanvas = newValue ? this.workerSSMaskMonitorCanvasRef.current! : null
                      this.setState({showSS:newValue})
                  }}>ss</Label>
                  <Label basic size="tiny" color={this.state.showGrid?"red":"grey"} onClick={()=>{
                      const newValue = !this.state.showGrid
                      this.scalableSS.girdDrawCanvas = newValue ? this.controllerCanvasRef.current! : null
                      this.setState({showGrid:!this.state.showGrid})
                  }}>grid</Label>

              </div>
          </div>

      )
  }

}



export default App;
