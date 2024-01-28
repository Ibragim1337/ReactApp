import './App.css';


import { useState } from "react";
 
const App = () => {
  let [value, setValue] = useState(1);
  let [step, setStep] = useState(1);
 
  const minusStep = () => {
    setValue(value - step);
    console.clear();

    console.log(value);
  };

  const plusStep = () => {
    setValue(value + step);
    console.clear();

    console.log(value);
  }

  const plus = () => {
    setStep(++step);
    console.clear();
    console.log(step);
  }

  const minus = () => {
    if(step < 2) return;
    setStep(--step);
    console.clear();
    console.log(step);
  }

  return (
    <>
       <button onClick={plusStep}>Plus</button>
       <div>{value.toString()}</div>
       <button onClick={minusStep}>Minus</button>
       <br/>
       <button onClick={plus}>Plus</button>
       <div>{step.toString()}</div>
       <button onClick={minus}>Minus</button>
    </>
  );
};
 
export default App;