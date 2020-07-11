interface OverlayLocation {
    overlayWidth: number
    overlayHeight: number
    overlayXOffset: number
    overlayYOffset: number
}

export function findOverlayLocation(parentWidth:number, parentHeight:number, videoWidth: number, videoHeight: number): OverlayLocation {
    const parentAspect = parentWidth / parentHeight
    const videoAspect = videoWidth / videoHeight

    let overlayHeight = 0
    let overlayWidth = 0
    let overlayXOffset = 0
    let overlayYOffset = 0

    if (parentAspect > videoAspect) {
        //キャンバスのほうが横長　➔　キャンバスの縦で律速
        // 
        overlayHeight = parentHeight
        overlayYOffset = 0
        overlayWidth = overlayHeight * (videoWidth / videoHeight)
        overlayXOffset = (parentWidth - overlayWidth) / 2
    } else {
        //キャンバスのほうが縦長　➔　キャンバスの横で律速
        overlayWidth = parentWidth
        overlayXOffset = 0
        overlayHeight = overlayWidth * (videoHeight / videoWidth)
        overlayYOffset = (parentHeight - overlayHeight) / 2
    }
    overlayWidth   = Math.floor(overlayWidth)
    overlayHeight  = Math.floor(overlayHeight)
    overlayXOffset = Math.floor(overlayXOffset)
    overlayYOffset = Math.floor(overlayYOffset)
    //console.log('------------', overlayWidth, overlayHeight, overlayXOffset, overlayYOffset)
    return {  overlayWidth, overlayHeight, overlayXOffset, overlayYOffset }

}

export const captureVideoImageToCanvas = (video:HTMLVideoElement):HTMLCanvasElement => {
    const videoCaptureCanvas    = document.createElement("canvas");
    videoCaptureCanvas.width = video.videoWidth
    videoCaptureCanvas.height = video.videoHeight

    const tmpCtx                = videoCaptureCanvas.getContext('2d')!
    tmpCtx.drawImage(video, 0, 0, videoCaptureCanvas.width, videoCaptureCanvas.height);
    return videoCaptureCanvas
}

export const captureImageToCanvas = (img:HTMLImageElement):HTMLCanvasElement => {
    const videoCaptureCanvas    = document.createElement("canvas");
    videoCaptureCanvas.width  = img.width
    videoCaptureCanvas.height = img.height

    const tmpCtx                = videoCaptureCanvas.getContext('2d')!
    tmpCtx.drawImage(img, 0, 0, videoCaptureCanvas.width, videoCaptureCanvas.height);
    return videoCaptureCanvas
}

