import React from "react";
import CounterButtons from "./CounterButtons";
import { signal } from "@preact/signals-react";

function Container({
  counter,
  handleCounter,
}) {

  console.log("RENDER CONTAINER");
  

  return (
    <div style={{ height: "300px", width: "300xp" }}>
      <h1> React Counter: {counter}  </h1>

      <CounterButtons counter={counter} handleCounter={handleCounter} />
    </div>
  )
}

export default Container;