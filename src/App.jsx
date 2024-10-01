//import BotonMeGusta from "./components/BotonMeGusta"

import { Fragment } from "react";
import TargetQr from "./components/TargetQr"
import "./components/components.css"
import CardTwitter from "./components/cardTwitter";

function App() {
  const qrData = [
    {
      id: 1,
      text1: "",
      text2: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    },
    {
      id: 2,
      text1: "Improve your front-end skills by building projects",
      Text2: "alberto"
    },
    {
      id: 3,
      text1: "Improve your front-end skills by building projects",
      Text2: "alberto"
    }
  ];

  return (
    <Fragment>
    <div className="cardqr">
      {qrData.map((qr) => (
        <TargetQr
        key={qr.id} // Siempre incluye una clave única
        text1={qr.text1}
        text2={qr.text2}
        />
      ))}
    </div>

    <div className="cardtwitter">
      <CardTwitter/>
    </div>

      </Fragment>
    

  );
}

export default App;
