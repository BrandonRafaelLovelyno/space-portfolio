import "../styles/Slider.css";

function Slider({ text }) {
  return (
    <div className="slider py-2 px-4">
      {text}
      <div className="slider-before">{text}</div>
    </div>
  );
}

export default Slider;
