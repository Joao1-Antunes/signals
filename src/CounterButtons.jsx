import React from "react";

function CounterButtons({
  handleCounter,
}) {

  console.log("RENDER COUNTER");

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        style={{ borderRadius: "8px", marginRight: 8 }}
        onClick={() => handleCounter("+")}
      >
        Increment
      </button>

      <button
        style={{ borderRadius: "8px" }}
        onClick={() => handleCounter("-")}
      >
        Decrease
      </button>
    </div>
  )
}

export default CounterButtons;