import { useState } from 'react'
import './App.css'
import Container from './Container';
import { signal } from '@preact/signals-react';

const counter = signal(0);

function App() {
  // const [counter, setCounter] = useState(0);

  console.log("RENDER APP");

  function handleCounter(operator) {
    if (operator === "+") {
      counter.value = counter.value + 1;
    } else if (operator === "-") {
      counter.value = counter.value - 1;
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container counter={counter} handleCounter={handleCounter} />
    </div>
  );
}

export default App;

