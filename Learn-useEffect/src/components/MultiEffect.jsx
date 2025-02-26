import React, { useEffect, useState } from "react";

function MultiEffect() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Count changes:", count);
  }, [count]);
  // side effect login will run everytime when count is changed

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("Time to stop");
      clearInterval(intervalId);
    };
  }, []);
  // it will run only on first render

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default MultiEffect;
