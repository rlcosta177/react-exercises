import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>counter app</div>
      <div>
        <button onClick={decrement}>-</button>
        <span>nº of clicks {count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
export default Counter;