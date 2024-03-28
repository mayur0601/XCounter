import { useState } from 'react'
import './App.css'

export default function App() {
  let [counter,setCounter] = useState(0);
  function increment(){
    setCounter(counter+1);
  }
  function decrement(){
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <main>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </main>
  )
}
