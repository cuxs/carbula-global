import React, { Fragment } from "react"
import QRCode from "react-qr-code"


const QrCode = ({qrValue = "CÁRBULA", qrSize = 128, qrBgColor = "#FFFFFF", qrFgColor = "#000000", qrLevel = "L", qrIncludeMargin = false, qrImageUrl = document.location.hostname+"https://pbs.twimg.com/media/ENnh07DXUAARD66?format=png"}) => {
    return (<QRCode value={qrValue} size={qrSize} bgColor={qrBgColor} fgColor={qrFgColor} level={qrLevel} includeMargin={qrIncludeMargin} />)
}

export default QrCode;