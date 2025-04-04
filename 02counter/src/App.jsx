
import './App.css'
import { useState } from 'react';
function App() {

  let [counter,SetCounter] = useState(15)


  //let counter =5

  // const addValue = ()=>{
  //   SetCounter(counter + 1)
  // }


  
  const addValue = ()=>{
    SetCounter((prevCounter)=>prevCounter+1)
    SetCounter((prevCounter)=>prevCounter+1)
    SetCounter((prevCounter)=>prevCounter+1)
    SetCounter((prevCounter)=>prevCounter+1)
    SetCounter((prevCounter)=>prevCounter+1)
  }


  const removeValue =()=>{
    if(counter>0){
    SetCounter(counter -1 );
    }
  }


  return (
    <>
      <h1>Chai aur react </h1>
      <h2>counter value : {counter} </h2>

      <button
       onClick={addValue}
      >Add value {counter} </button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
