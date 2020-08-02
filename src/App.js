import React, { useState, useEffect } from "react";
import "./styles.css";
import Counter from "./Counter";

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
      <Counter
        counter={counter1}
        setCounter={setCounter1}
        name={"Counter-1: "}
      />
      <Counter
        counter={counter2}
        setCounter={setCounter2}
        name={"Counter-2: "}
      />
      <Counter
        counter={counter3}
        setCounter={setCounter3}
        name={"Counter-3: "}
      />
      <Counter
        counter={counter4}
        setCounter={setCounter4}
        name={"Counter-4: "}
      />
      <Counter
        counter={counter5}
        setCounter={setCounter5}
        name={"Counter-5: "}
      />
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
