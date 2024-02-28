import { useState } from 'react'
import './App.css'
import Container from './Container';

function App() {
  const [counter, setCounter] = useState(0);

  console.log("RENDER APP");

  function handleCounter(operator) {
    if (operator === "+") {
      setCounter((count) => count + 1);
    } else if (operator === "-") {
      setCounter((count) => count - 1);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container counter={counter} handleCounter={handleCounter} />
    </div>
  );
}

export default App;

