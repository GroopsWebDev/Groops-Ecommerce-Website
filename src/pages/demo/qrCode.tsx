// import { useState } from "react";
// import { usePathname } from 'next/navigation';

// import * as React from "react";
// import QRCode from "qrcode.react";


// export default function QrCode() {

//     const currentPage = usePathname();
//     const origin =
//     typeof window !== 'undefined' && window.location.origin
//         ? window.location.origin
//         : '';

//     const URL = `${origin}${currentPage}`;    
//     // Swal.fire(URL);
//     console.log(URL)

//   const qrRef = React.useRef();
//   const [url, setUrl] = React.useState("");

//     const [groupName, setGroupName] = useState('group')
//     // const [value, setValue]  = useState('');
//     const [back, setBack] = useState("#FFFFFF");
//     const [fore, setFore] = useState('#000000');
//     const [size, setSize] = useState(256)


//   const downloadQRCode = (evt: React.FormEvent) => {
//     evt.preventDefault();
//     // @ts-ignore
//     let canvas = qrRef.current.querySelector("canvas");
//     let image = canvas.toDataURL("image/png");
//     let anchor = document.createElement("a");
//     anchor.href = image;
//     anchor.download = groupName + '.png';
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
//     setUrl("");
//   };

//   const qrCode = (
//     <QRCode
//       id="qrCodeElToRender"
//       size={size}
//       value={url}
//       bgColor={back}
//       fgColor={fore}
//     />
//   );

//   return (
//          <div style={{
//              //display: "flex",
//              alignItems: "center",
//              //height: "100%"
//            }}
//            className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8"
//            >
//       <form onSubmit={downloadQRCode} >

//         <br />
//         <br /> Group Name 
//         <br />
//         <input
//           type="text"
//           value={groupName}
//           onChange={(e) => setGroupName(e.target.value)}
//           placeholder="G1"
//         />

//         <br />
//         <br /> Group URL
//         <br />
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="https://example.com"
//         />


//         <br />
//         <br /> Background color
//         <br />
//         <input
//           type="text"
//           value={back}
//           onChange={(e) => setBack(e.target.value)}
//           placeholder="Background color"
//         />

//         <br />
//         <br /> Foreground color
//         <br />
//         <input
//           type="text"
//           value={fore}
//           onChange={(e) => setFore(e.target.value)}
//           placeholder="Foreground color"
//         />

//         <br />
//         <br /> Size of Qr-code
//         <br />
//         <input
//         type="number"
//         min = "100"
//         value={size}
//         onChange={(e) => setSize(parseInt(
//             e.target.value))}
//         placeholder="Size of Qr-code"
//         />

//      <div ref={qrRef}>
//         {qrCode}
//       </div> 

//         <button type="submit">Click Here to Download QR Code</button>
//       </form>

//     </div>
//   );
// }

//

import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const About = () => {
  const { locale, locales } = useRouter();
  const { t: translate } = useTranslation("about");
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="flex flex-row">
      {locales?.map((l) => (
        <h4 key={l} className="mr-2 mt-2 bg-gray-500 p-2 text-white">
          <Link href="" locale={l}>
            {l}
          </Link>
        </h4>
      ))}
    </div>
    <h1 className="text-center">Locale: {locale}</h1>
    <h2 className="text-center">{translate("hello Groops")}</h2>
    <h2 className="text-center">{translate("test")}</h2>
  </div>
  );
};

export async function getStaticProps({ locale = "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default About;
