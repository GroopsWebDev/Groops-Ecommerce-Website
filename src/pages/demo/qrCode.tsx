import { useState } from "react";
import { usePathname } from 'next/navigation';

import * as React from "react";
import QRCode from "qrcode.react";


export default function QrCode() {

    const currentPage = usePathname();
    const origin =
    typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    const URL = `${origin}${currentPage}`;    
    // Swal.fire(URL);
    console.log(URL)

  const qrRef = React.useRef();
  const [url, setUrl] = React.useState("");

    const [groupName, setGroupName] = useState('group')
    // const [value, setValue]  = useState('');
    const [back, setBack] = useState("#FFFFFF");
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256)


  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    // @ts-ignore
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = groupName + '.png';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCode = (
    <QRCode
      id="qrCodeElToRender"
      size={size}
      value={url}
      bgColor={back}
      fgColor={fore}
    />
  );

  return (
         <div style={{
             //display: "flex",
             alignItems: "center",
             //height: "100%"
           }}
           className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8"
           >
      <form onSubmit={downloadQRCode} >

        <br />
        <br /> Group Name 
        <br />
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="G1"
        />

        <br />
        <br /> Group URL
        <br />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />


        <br />
        <br /> Background color
        <br />
        <input
          type="text"
          value={back}
          onChange={(e) => setBack(e.target.value)}
          placeholder="Background color"
        />

        <br />
        <br /> Foreground color
        <br />
        <input
          type="text"
          value={fore}
          onChange={(e) => setFore(e.target.value)}
          placeholder="Foreground color"
        />

        <br />
        <br /> Size of Qr-code
        <br />
        <input
        type="number"
        min = "100"
        value={size}
        onChange={(e) => setSize(parseInt(
            e.target.value))}
        placeholder="Size of Qr-code"
        />

     <div ref={qrRef}>
        {qrCode}
      </div> 

        <button type="submit">Click Here to Download QR Code</button>
      </form>

    </div>
  );
}