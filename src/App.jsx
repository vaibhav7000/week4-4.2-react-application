import { useState } from "react";
import CustomButton from "./CustomButton.jsx";

function App() {
  // this is the api (useState) that React provides to handle the "state" (inside this we have the logic of calculating the difference between the previous and the latest state and if there is difference React will delegate the task of updating / doing DOM-manipulation to ReactDOM)
  const [count, setCount] = useState(0);
  
  
  // this component returns the xml and in xml we can write JS using { js code }
  return (
    <div>
      <button onClick={function() {
        // know we have to call the "calculateDiffDOMManipulation" (takes the updated state) that is similar to "setCount" (takes the updated state) that will calculate the difference and based on the difference between the states the DOM will be updated by the ReactDOM
        setCount(count + 1); // know there is clear difference between the states => will always do DOMmanipulation / re-rendering will occur
      }} >Count is {count}</button>


      <CustomButton count={count} setCount = {setCount} />
    </div>
  )
}


export default App;

// React provides different methods (useState) that takes the updated value and if there will be any differnece between the value will call the ReactDOM to do the updation.

// When writing JS in xml we have to use { javascript will be present here }