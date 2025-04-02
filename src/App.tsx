import { useState, useEffect } from "react";
import "./App.css";
import { handleColor } from "./logic";
function App() {
  const [color, setColor] = useState("green");
  useEffect(() => {
    if (color == "green") {
      handleColor("yellow", setColor);
    } else if (color === "yellow") {
      handleColor("red", setColor);
    } else {
      handleColor("green", setColor);
    }
  }, [color]);

  return (
    <div className="container">
      <div className="signal"></div>
    </div>
  );
}

export default App;
