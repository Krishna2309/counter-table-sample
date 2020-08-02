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
      <span>counter-1: </span>
      <span>{props.counter}</span>
    </div>
  );
};

export default Counter;
