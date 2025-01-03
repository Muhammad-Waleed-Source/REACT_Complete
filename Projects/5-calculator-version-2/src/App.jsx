import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/display";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal); // this will evaluate the string eg. "2+2"
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
