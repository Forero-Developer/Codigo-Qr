//import BotonMeGusta from "./components/BotonMeGusta"

import TargetQr from "./components/TargetQr"
import "./components/cards.css"

function App() {
  const qrData = [
    {
      id: 1,
      text1: "Alberto",
      text2: "larabel"
    },
    {
      id: 2,
      text1: "Alberto",
      text2: "larabel"
    },
    {
      id: 3,
      text1: "Alberto",
      text2: "larabel"
    },
    {
      id: 4,
      text1: "Alberto",
      text2: "larabel"
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
