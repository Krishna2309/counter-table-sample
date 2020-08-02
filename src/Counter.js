import React from "react";

const Counter = props => {
  const increamentCounter = () => {
    props.setCounter(++props.counter);
  };

  const decreamentCounter = () => {
    props.setCounter(--props.counter);
  };

  return (
    <div>
      <button onClick={increamentCounter}>+</button>
      <button onClick={decreamentCounter}>-</button>
      <span>{props.name}</span>
      <span>{props.counter}</span>
    </div>
  );
};

export default Counter;
