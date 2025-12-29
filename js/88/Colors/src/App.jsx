import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('#00ff00')
  const [backgroundColor, setBackgroundColor] = useState('#33aaff')
  const [font, setFont] = useState('serif');
  return (
    <>
      <div
        style={{
          color: color,
          backgroundColor: backgroundColor,
          fontFamily: font,
        }}
      >
        <label>
          Color:{" "}
          <input
            type="color"
            name="color"
            id=""
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Background Color:{" "}
          <input
            type="color"
            name="background-color"
            id=""
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <label>
          Font:
          <select name="" id="" onChange={(e) => setFont(e.target.value)}>
            <option>serif</option>
            <option>sans-serif</option>
            <option>cursive</option>
            <option>fantasy</option>
            <option>monospace</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default App;
