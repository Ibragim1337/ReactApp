import "./App.css";
import Div from "./components/Div/Div";
import Button from "./components/Button/Button";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  
  const minus = () => {
    setCount(count - 1);
    console.log(count);
  }

  const plus = () => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
  <Button qorwok={minus}>-</Button>
  <Div>{count}</Div>
  <Button qorwok={plus}>+</Button>
    </>
  );
};

export default App;
