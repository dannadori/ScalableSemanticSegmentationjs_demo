import React from 'react';
import './App.css';
import { Dropdown, Label } from 'semantic-ui-react'
import { DisplayConstraintOptions, AIConfig } from './const';
import { findOverlayLocation, captureVideoImageToCanvas, captureImageToCanvas } from './util';
import { ScalableSemanticSegmentation } from 'scalable-semantic-segmentation-js'
import { RS_TESTIMAGES, RS_TESTIMAGEMASKS } from './resources';

interface AppState {
    count: number,
    videoResolution: string,
    colnum: number,
    rownum: number,
    showRect: boolean,
    showSS: boolean,
    showGrid: boolean,
    initialized: boolean,

    testMode: boolean,
    testIndex: number,
    autoTest: boolean,
    autoTestIndex:number
    autoTestIOU: number[]
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

        testMode: false,
        testIndex: 0,
        autoTest: false,
        autoTestIndex:0,
        autoTestIOU:[],
    }

    ////////////////////
    // HTML Component //
    ////////////////////
    parentRef = React.createRef<HTMLDivElement>()
    videoRef = React.createRef<HTMLVideoElement>()
    imgCanvasRef = React.createRef<HTMLCanvasElement>()
    labelImgCanvasRef = React.createRef<HTMLCanvasElement>()
    controllerCanvasRef = React.createRef<HTMLCanvasElement>()
    controllerDivRef = React.createRef<HTMLDivElement>()
    workerSSMaskMonitorCanvasRef = React.createRef<HTMLCanvasElement>()
    statusCanvasRef = React.createRef<HTMLCanvasElement>()
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

    scalableSS: ScalableSemanticSegmentation = new ScalableSemanticSegmentation()


    frameToCalc = 10
    frame = 0
    startTime = 0
    showFPS = () =>{
        this.frame += 1
        if(this.frame >= this.frameToCalc){
            const elapsedTime = (performance.now() - this.startTime) / 1000
            const fps = Math.ceil((this.frameToCalc / elapsedTime) * 10) / 10
            const messFps = `FPS: ${fps}`
            this.showStatus(this.STATUS_FPS, messFps)
            this.frame = 0
            this.startTime = performance.now()
        }
    }
    modelPath = ""
    showCondition = () => {
        const messCond = `${this.state.videoResolution}, ${this.state.colnum}, ${this.state.rownum}, ${this.modelPath}`
        this.showStatus(this.STATUS_CONDITION, messCond)
    }
    /**
     * ワーカーの初期化
     */
    async initWorker(model:string) {
        // SemanticSegmentation 用ワーカー
        this.scalableSS.addInitializedListener(() => {
            this.setState({ initialized: true })
            this.requestScanBarcode()
        })
        this.scalableSS.addMaskPredictedListeners((maskBitmap: ImageBitmap) => {
//            console.log(model, this.modelPath)

            if (this.statusCanvasRef.current!.width !== this.parentWidth){
                this.statusCanvasRef.current!.width = this.parentWidth
                this.statusCanvasRef.current!.height = this.parentHeight
            }
            
    
            this.showCondition()
            // 再キャプチャ
            if (this.state.testMode === false) { // normal mode の場合はループ
                this.showFPS()
                this.requestScanBarcode()
            } else { // test mode
                if(this.state.autoTest === false){
                    this.evaluate_masksize(maskBitmap, this.state.testIndex)
                }else{
                    this.evaluate_masksize(maskBitmap, this.state.autoTestIndex).then((iou:number)=>{
                        if(this.state.autoTest===true){
                            this.autoTest(false)
                        }
                    })
                }
            }
        })
        this.scalableSS.init(model, AIConfig.SPLIT_WIDTH, AIConfig.SPLIT_HEIGHT, AIConfig.SPLIT_MARGIN)
        this.modelPath = model
        return
    }

    async changeModel(model:string){
        this.scalableSS = new ScalableSemanticSegmentation()
        this.initWorker(model)
    }    

    /**
     * HTMLコンポーネントに位置計算
     */
    private checkParentSizeChanged(video: HTMLVideoElement) {
        // サイズ算出
        this.videoHeight = video.videoHeight
        this.videoWidth = video.videoWidth

        let parentHeight = video.getBoundingClientRect().bottom - video.getBoundingClientRect().top
        const parentWidth = video.getBoundingClientRect().right - video.getBoundingClientRect().left

        parentHeight = (parentWidth / this.videoWidth) * this.videoHeight

        this.parentHeight = parentHeight
        this.parentWidth = parentWidth
        const { overlayWidth, overlayHeight, overlayXOffset, overlayYOffset } = findOverlayLocation(this.parentWidth, this.parentHeight, this.videoWidth, this.videoHeight)
        this.overlayWidth = overlayWidth
        this.overlayHeight = overlayHeight
        this.overlayXOffset = overlayXOffset
        this.overlayYOffset = overlayYOffset


        this.workerSSMaskMonitorCanvasRef.current!.width = this.overlayWidth
        this.workerSSMaskMonitorCanvasRef.current!.height = this.overlayHeight
        this.controllerCanvasRef.current!.width = this.overlayWidth
        this.controllerCanvasRef.current!.height = this.overlayHeight

    }

    /**
     * マウント時の処理
     * モデルのロード、カメラの準備ができたらイベント発行する
     */
    componentDidMount() {
        console.log('Initializing')

        const initWorkerPromise = this.initWorker(AIConfig.SS_MODEL_PATH)

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

    changeCameraResolution = (resolution: string) => {
        (this.videoRef.current!.srcObject as MediaStream).getTracks().map(s => s.stop())
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
                    this.setState({ videoResolution: resolution })
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
        if (captureCanvas.width === 0) {
            captureCanvas.remove()
            window.requestAnimationFrame(this.requestScanBarcode);
            return
        }
        this.scalableSS.predict(captureCanvas, this.state.colnum, this.state.rownum)
        captureCanvas.remove()
    }

    STATUS_FPS       = 1
    STATUS_CONDITION = 2
    STATUS_IOU       = 3
    STATUS_IOU_SUM   = 4

    showStatus = (kind:number, mess:string)=>{

        const offset_y_base = 50
        const offset_x_base = 10
        const fontsize = 32
        const lineHeight = fontsize+5
        const offset_x = offset_x_base
        const offset_y = offset_y_base + lineHeight * kind

        const ctx= this.statusCanvasRef.current!.getContext("2d")!
        ctx.font         = "32px sans-serif"
        ctx.textBaseline = "top";
        const metrics = ctx.measureText(mess);
        const textWidth = metrics.width+3

        ctx.clearRect(offset_x, offset_y, textWidth, lineHeight)
        ctx.fillStyle = "#22222277";
        ctx.fillRect(offset_x, offset_y, textWidth, lineHeight)
        ctx.fillStyle = "#DD3333cc";
        ctx.fillText(mess, offset_x, offset_y)
    }


    autoTest = async (start:boolean) =>{
        const autoTestIndex = start ? 0: this.state.autoTestIndex+1 // at fist test, initialize
        const ious = start? []:this.state.autoTestIOU             // at fist test, initialize

        if (autoTestIndex >= RS_TESTIMAGES.length){
            console.log("fin")
            console.log(ious)
            this.setState({autoTest:false})
            return
        }

        await this.requestScanBarcodeWithImage(autoTestIndex)
        this.setState({autoTestIndex:autoTestIndex, autoTestIOU:ious})
    }

    requestScanBarcodeWithImage = async (imageIndex: number) => {
        const tmpImage = document.createElement("img")
        tmpImage.src = RS_TESTIMAGES[imageIndex]
        tmpImage.onload = (e) => {
            this.imgCanvasRef.current!.width=tmpImage.width
            this.imgCanvasRef.current!.height=tmpImage.height
            const ctx = this.imgCanvasRef.current!.getContext("2d")!
            ctx.drawImage(tmpImage, 0, 0, this.imgCanvasRef.current!.width, this.imgCanvasRef.current!.height)
            const tmpCanvas = captureImageToCanvas(tmpImage)
            this.scalableSS.predict(tmpCanvas, this.state.colnum, this.state.rownum)
            tmpCanvas.remove()
            tmpImage.remove()
        }
    }

    evaluate_masksize = async (maskBitmap:ImageBitmap, testIndex:number):Promise<number> => {
        const imgPromise = new Promise((resolve, reject) => {
            const img = new Image()
            img.onload  = ()  => {resolve(img)}
            img.onerror = (e) => {reject(e)}
            img.src = RS_TESTIMAGEMASKS[testIndex]
        })

        const img = await Promise.resolve(imgPromise) as HTMLImageElement

        // マスク結果のImageDataを取得
        const maskCanvas = document.createElement("canvas")
        maskCanvas.width = maskBitmap.width
        maskCanvas.height = maskBitmap.height
        const maskctx = maskCanvas.getContext("2d")!
        maskctx.drawImage(maskBitmap, 0, 0, maskBitmap.width, maskBitmap.height)
        const maskImageData = maskctx.getImageData(0, 0, maskBitmap.width, maskBitmap.height)
        // ラベルのImageData
        const labelCanvas = document.createElement("canvas")
        labelCanvas.width = maskBitmap.width
        labelCanvas.height = maskBitmap.height
        const labelctx = labelCanvas.getContext("2d")!
        labelctx.drawImage(img, 0, 0, maskBitmap.width, maskBitmap.height)
        const labelImageData = labelctx.getImageData(0, 0, maskBitmap.width, maskBitmap.height)        

        for(let i=0; i < labelImageData.data.length; i+=4){
            if(labelImageData.data[i] === 1){
                labelImageData.data[i+1]=255
            }
            labelImageData.data[i+3]=128
        }
        const tmpCanvas=document.createElement("canvas")
        tmpCanvas.width=labelImageData.width
        tmpCanvas.height=labelImageData.height
        tmpCanvas.getContext("2d")!.putImageData(labelImageData,0,0)
        this.labelImgCanvasRef.current!.getContext("2d")!.clearRect(0, 0, this.labelImgCanvasRef.current!.width, this.labelImgCanvasRef.current!.height)
        this.labelImgCanvasRef.current!.getContext("2d")!.drawImage(tmpCanvas, 0, 0, this.labelImgCanvasRef.current!.width, this.labelImgCanvasRef.current!.height)

        img.remove()
        maskCanvas.remove()
        labelCanvas.remove()
        tmpCanvas.remove()
        
        // console.log(labelImageData, maskImageData)
        let tp = 0
        let fp = 0
        let fn = 0
        let tn = 0
        for(let i=0; i < maskImageData.data.length; i+=4){
            const val = maskImageData.data[i]+labelImageData.data[i]
            switch(val){
                case 0:
                    tn+=1 // TrueNegative
                    break
                case 1:
                    fn+=1 // FalseNegative
                    break
                case 255:
                    fp+=1 // FalsePositive
                    break
                case 256:
                    tp+=1 // TruePositive
                    break
                default:
                    console.log("invalid value:"+val)
            }
        }
        const iou = Math.ceil( tp/(tp+fp+fn) * 10000) / 100
        const mess = `TP:${tp}, FP:${fp}, FN:${fn}, TN:${tn}, IOU=${iou}`
        const ious = this.state.autoTestIOU
        ious.push(iou)
        const meanIOU = Math.ceil((ious.reduce((accum, newval)=>{return accum+newval}) / ious.length) * 100) /100
        const mess_sum = `mIOU:${meanIOU}, NUM:${ious.length}`

        console.log(mess)
        this.showStatus(this.STATUS_IOU, mess)
        this.showStatus(this.STATUS_IOU_SUM, mess_sum)

        //this.setState({autoTestIOU:ious})

        return iou
    }





    evaluate_orgsize = async (maskBitmap:ImageBitmap) =>{
        const tmpImage = document.createElement("img")
        tmpImage.src = RS_TESTIMAGEMASKS[this.state.testIndex]
        tmpImage.onload = (e) =>{

            // マスク結果のImageDataを取得
            const maskCanvas = document.createElement("canvas")
            maskCanvas.width = tmpImage.width
            maskCanvas.height = tmpImage.height
            const maskctx = maskCanvas.getContext("2d")!
            maskctx.drawImage(maskBitmap, 0, 0, tmpImage.width, tmpImage.height)
            const maskImageData = maskctx.getImageData(0, 0, tmpImage.width, tmpImage.height)
            

            // ラベルのImageData
            const labelCanvas = document.createElement("canvas")
            labelCanvas.width = tmpImage.width
            labelCanvas.height = tmpImage.height
            const labelctx = labelCanvas.getContext("2d")!
            labelctx.drawImage(tmpImage, 0, 0, tmpImage.width, tmpImage.height)
            const labelImageData = labelctx.getImageData(0, 0, tmpImage.width, tmpImage.height)

            tmpImage.remove()
            maskCanvas.remove()
            labelCanvas.remove()

            console.log(labelImageData, maskImageData)
            const nonzero=[]
            for(let i=0; i < maskImageData.data.length; i+=4){
                if(maskImageData.data[i]!==0){
                    nonzero.push(maskImageData.data[i])
                }
            }
            console.log("mask")
            console.log(nonzero.length)
            console.log(nonzero)

            const nonzero2=[]
            for(let i=0; i < labelImageData.data.length; i+=4){
                if(labelImageData.data[i]!==0){
                    nonzero2.push([labelImageData.data[i],i])
                }
            }
            console.log("label")
            console.log(nonzero2.length)
            console.log(nonzero2)
        }
    }


    render() {
        const video = this.videoRef.current!

        if (this.state.initialized === true) {
            console.log('initialized')
            this.checkParentSizeChanged(video)
        }

        const constraints = Object.keys(DisplayConstraintOptions)
        const constraintOptions = constraints.map(v => {
            return { key: v, text: v, value: v }
        })

        const colnumOptionList = [1, 2, 3]
        const colnumOptions = colnumOptionList.map(v => {
            return { key: v, text: v, value: v }
        })
        const rownumOptionList = [1, 2, 3]
        const rownumOptions = rownumOptionList.map(v => {
            return { key: v, text: v, value: v }
        })

        const modelOptions = AIConfig.SS_MODEL_PATHS.map(v =>{
            return { key: v, text: v, value: v }
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
                    ref={this.imgCanvasRef}
                    style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width: this.parentWidth, height: this.parentHeight, display: "none" }}
                />
                <canvas
                    ref={this.labelImgCanvasRef}
                    style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width: this.parentWidth, height: this.parentHeight, display: "none" }}
                />


                <canvas
                    ref={this.workerSSMaskMonitorCanvasRef}
                    style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width: this.parentWidth, height: this.parentHeight }}
                />
                <canvas
                    ref={this.controllerCanvasRef}
                    style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width: this.parentWidth, height: this.parentHeight }}
                />
                <canvas
                    ref={this.statusCanvasRef}
                    style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width: this.parentWidth, height: this.parentHeight }}
                />

                <div
                    ref={this.controllerDivRef}
                    style={{ position: "absolute", top: this.overlayYOffset, left: this.overlayXOffset, width: this.parentWidth, height: this.parentHeight }}
                >
                    <Dropdown text='Resolution' options={constraintOptions} simple item onChange={(e, { value }) => {
                        this.changeCameraResolution(value as string)
                    }} />
                    <Dropdown text='col' options={colnumOptions} simple item onChange={(e, { value }) => {
                        this.setState({ colnum: value as number })
                    }} />
                    <Dropdown text='row' options={rownumOptions} simple item onChange={(e, { value }) => {
                        this.setState({ rownum: value as number })
                    }} />
                    <Dropdown text='row' options={modelOptions} simple item onChange={(e, { value }) => {
                        this.modelPath = value as string
                        this.changeModel(value as string )
                    }} />
                    <Label basic size="tiny" color={this.state.showSS ? "red" : "grey"} onClick={() => {
                        const newValue = !this.state.showSS
                        this.scalableSS.previewCanvas = newValue ? this.workerSSMaskMonitorCanvasRef.current! : null
                        this.setState({ showSS: newValue })
                    }}>ss</Label>
                    <Label basic size="tiny" color={this.state.showGrid ? "red" : "grey"} onClick={() => {
                        const newValue = !this.state.showGrid
                        this.scalableSS.girdDrawCanvas = newValue ? this.controllerCanvasRef.current! : null
                        this.setState({ showGrid: newValue })
                    }}>grid</Label>

                    <Label basic size="tiny" color={this.state.testMode ? "red" : "grey"} onClick={() => {
                        const newValue = !this.state.testMode
                        this.setState({ testMode: newValue })
                        if (newValue === false) {//normal mode
                            this.requestScanBarcode()
                            this.imgCanvasRef.current!.style.display = "none"
                            this.labelImgCanvasRef.current!.style.display = "none"
                        } else {
                            this.imgCanvasRef.current!.style.display = "block"
                            this.labelImgCanvasRef.current!.style.display = "block"
                            this.requestScanBarcodeWithImage(this.state.testIndex)
                        }


                    }}>test({this.state.testIndex})</Label>

                    <Label basic size="tiny" color={this.state.testMode ? "red" : "grey"} onClick={() => {
                        if (this.state.testMode === true) {
                            this.setState({ testIndex: this.state.testIndex - 1 })
                            this.requestScanBarcodeWithImage(this.state.testIndex - 1)
                        }
                    }}>prev</Label>
                    
                    <Label basic size="tiny" color={this.state.testMode ? "red" : "grey"} onClick={() => {
                        if (this.state.testMode === true) {
                            this.setState({ testIndex: this.state.testIndex + 1 })
                            this.requestScanBarcodeWithImage(this.state.testIndex + 1)
                        }
                    }}>next</Label>

                    <Label basic size="tiny" color={this.state.testMode ? "red" : "grey"} onClick={() => {
                        if (this.state.testMode === true) {
                            this.autoTest(true)
                            this.setState({autoTest:true})
                        }
                    }}>autotest</Label>


                </div>

            </div>

        )
    }

}



export default App;
