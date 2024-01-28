import './App.css';


import { useState } from "react";
 
const App = () => {
  let [value, setValue] = useState(1);
 
 
  const minus = () => {
    setValue(--value);
    console.clear();
    console.log(value);
  };

  const plus = () => {
    setValue(++value);
    console.clear();
    console.log(value);
  }

  return (
    <>
       <button onClick={plus}>Plus</button>
       <button onClick={minus}>Minus</button>
      <div>{value.toString()}</div>
    </>
  );
};
 
export default App;