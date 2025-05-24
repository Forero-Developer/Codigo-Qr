import "./TargetQr.css";
const TargetQr = ({ text1, text2 }) => {
  return (
    <div className="container-target">
      <img src="/image-qr-code.png" alt="Logo" />
      <div className="textos">
        <h3 className="text1">{text1}</h3>
        <p className="text2">{text2}</p>
      </div>
    </div>
  );
};

export default TargetQr;
