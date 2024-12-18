import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // handle increment counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 7);
  };

  // handle decrement Counter
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 3);
  };
  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={handleDecrement}>
          Minus 3
        </button>
        <button className="btn btn-2" onClick={handleIncrement}>
          Add 7
        </button>
        <h3 className="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
