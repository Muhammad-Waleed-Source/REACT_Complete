import { useEffect, useState } from "react";
import "./App.css";
import LoggerComponent from "./components/LoggerComponent";
import Timer from "./components/Timer";
import DataFetcher from "./components/DataFetcher";
import Resize from "./components/Resize";
import MultiEffect from "./components/MultiEffect";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // first -> side-effect function
  // second -> cleanup function
  // third -> comma separated dependency list

  // variation 1: runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  // variation 2: That runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, [])

  // variation 3: Runs when the count is updated
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count]);

  // variation 4: multiple dependencies
  // useEffect(() => {
  //   alert("I will run when count/total is updated")
  // }, [count, total]);

  // variation 5: adding cleanup function
  // useEffect(() => {
  //   alert("Count is updated");

  //   return () => {
  //     alert("Count is unmounted from UI");
  //   };
  // }, [count]);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <Timer /> */}
      {/* <DataFetcher /> */}
      {/* <Resize /> */}
      <MultiEffect />
      {/* <button onClick={handleClick}>Update Count</button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is: {total} */}
    </div>
  );
}

export default App;
