import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
 
let [counterValue,setCounter] = useState(15)
  
  // let counterValue = 15
  const addValue = () =>{
    // console.log("value added", Math.random());
    console.log("clicked",counterValue);
      // counterValue = counterValue +1;
      setCounter(counterValue + 1 )
  }


  
  
  const removeValue = ()=>{
    console.log("removed value",removeValue);

    setCounter(counterValue- 1 )
  }

  return (
    <>
    <h1>Counter react</h1>
    <h2>counter value : {counterValue}</h2>
    <button onClick={addValue}>Add number</button>
    <br />
    <button
    onClick={removeValue}>Reduct value</button>
    </>
  )
}

export default App
