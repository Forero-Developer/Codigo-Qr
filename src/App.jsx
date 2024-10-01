//import BotonMeGusta from "./components/BotonMeGusta"

import TargetQr from "./components/TargetQr"
import "./components/cards.css"

function App() {
  const qrData = [
    {
      id: 1,
      text1: "Improve your front-end skills by building projects",
      text2: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    },
    {
      id: 2,
      text1: "Improve your front-end skills by building projects",
      text2: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    }
  ];

  return (
    <div className="cards">
      {qrData.map((qr) => (
        <TargetQr
          key={qr.id} // Siempre incluye una clave única
          text1={qr.text1}
          text2={qr.text2}
        />
      ))}
    </div>

  );
}

export default App;
