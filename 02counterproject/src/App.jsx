import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
  // let counter=15

  const addvalue=()=>{
    // console.log("add vaue",counter);
    // counter+=1;
    if (counter<=19){
    setcounter(counter+1);
  }else{
    alert("counter is not going to greater than 20");
  }
  }

  const removevalue=()=>{
    if (counter==0){
      alert("counter is not going to lower than 0");
    }else{
      setcounter(counter-1);
    }
    }

  return (
    <>
    <h1>Vivek Chaubey</h1>
    <h1>Count Value: {counter}</h1>
    <button onClick={addvalue}>Add Value</button>
    <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
