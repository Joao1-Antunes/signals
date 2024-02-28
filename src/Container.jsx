import React from "react";
import Counter from "./CounterButtons";

function Container({
  counter,
  handleCounter,
}) {

  console.log("RENDER CONTAINER");

  return (
    <div style={{ height: "300px", width: "300xp" }}>
      <h1> React Counter: {counter}  </h1>

      <Counter counter={counter} handleCounter={handleCounter} />
    </div>
  )
}

export default Container;