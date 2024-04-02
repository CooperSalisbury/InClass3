import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, updateCount] = useState(0);

  const add = () => {
    updateCount(count + 1);
  };

  const subtract = () => {
    updateCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <p>{count}</p>
      <div className="buttons">
        <button onClick={subtract}>Decrease</button>
        <button onClick={add}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
