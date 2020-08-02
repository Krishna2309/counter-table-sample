import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  const increamentCounter = (increamentValue, onIncreamentValue) => {
    onIncreamentValue(++increamentValue);
  };

  const decreamentCounter = (decreamentValue, onDecreamentvalue) => {
    onDecreamentvalue(--decreamentValue);
  };

  useEffect(() => {
    setSum(counter1 + counter2 + counter3 + counter4 + counter5);
    setAverage(() => {
      return (counter1 + counter2 + counter3 + counter4 + counter5) / 5;
    });

    setMax(Math.max(counter1, counter2, counter3, counter4, counter5));
    setMin(Math.min(counter1, counter2, counter3, counter4, counter5));
  }, [counter1, counter2, counter3, counter4, counter5]);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            increamentCounter(counter1, setCounter1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decreamentCounter(counter1, setCounter1);
          }}
        >
          -
        </button>
        <span>counter-1: </span>
        <span>{counter1}</span>
      </div>
      <div>
        <button
          onClick={() => {
            increamentCounter(counter2, setCounter2);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decreamentCounter(counter2, setCounter2);
          }}
        >
          -
        </button>
        <span>counter-2: </span>
        <span>{counter2}</span>
      </div>
      <div>
        <button
          onClick={() => {
            increamentCounter(counter3, setCounter3);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decreamentCounter(counter3, setCounter3);
          }}
        >
          -
        </button>
        <span>counter-3: </span>
        <span>{counter3}</span>
      </div>
      <div>
        <button
          onClick={() => {
            increamentCounter(counter4, setCounter4);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decreamentCounter(counter4, setCounter4);
          }}
        >
          -
        </button>
        <span>counter-4: </span>
        <span>{counter4}</span>
      </div>
      <div>
        <button
          onClick={() => {
            increamentCounter(counter5, setCounter5);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decreamentCounter(counter5, setCounter5);
          }}
        >
          -
        </button>
        <span>counter-5: </span>
        <span>{counter5}</span>
      </div>

      <div>
        <div>
          <span>Total Sum: </span>
          <span>{sum}</span>
        </div>
        <div>
          <span>Average: </span>
          <span>{average}</span>
        </div>
        <div>
          <span>Max: </span>
          <span>{max}</span>
        </div>
        <div>
          <span>Min: </span>
          <span>{min}</span>
        </div>
      </div>
    </div>
  );
}
