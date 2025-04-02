import { useState, useEffect, useRef } from "react";
import "./App.css";
import { handleColor, staticColor } from "./logic";
const { RED, GREEN, YELLOW } = staticColor;
function App() {
  const [color, setColor] = useState("green");
  const [info, setInfo] = useState("GO");
  const timer = useRef<number>(0);

  useEffect(() => {
    if (color === GREEN) {
      timer.current = handleColor(YELLOW, setColor);
      setInfo("GO");
    } else if (color === YELLOW) {
      timer.current = handleColor(RED, setColor);
      setInfo("SLOW DOWN");
    } else {
      timer.current = handleColor(GREEN, setColor);
      setInfo("STOP");
    }
    return function () {
      clearTimeout(timer.current);
    };
  }, [color]);

  return (
    <div className="container">
      <h1>Traffic Lights React Machine Coding Question</h1>
      <div className="signal">
        <div className={color == RED ? "red" : "white"}></div>
        <div className={color == YELLOW ? "yellow" : "white"}></div>
        <div className={color == GREEN ? "green" : "white"}></div>
      </div>
      <h1>{info}</h1>
    </div>
  );
}

export default App;
