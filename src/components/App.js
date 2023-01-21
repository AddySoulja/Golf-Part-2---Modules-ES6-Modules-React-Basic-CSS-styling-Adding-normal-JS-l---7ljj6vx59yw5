import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") {
        setX(x + 5);
      }
      if (e.key === "ArrowUp") {
        setY(y - 5);
      }
      if (e.key === "ArrowLeft") {
        setX(x - 5);
      }
      if (e.key === "ArrowDown") {
        setY(y + 5);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [x, y]);

  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
  };

  const renderChoice = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: `${x}px`,
            top: `${y}px`
          }}
        ></div>
      )
    }
    return (
      <button
        onClick={() => setRenderBall(true)}
        className="start"
      >Start</button>
    );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
