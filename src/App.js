import "./App.css";
import React from "react";

function App() {
  const [isVisibl, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h2> Hidden Text </h2>}
    </div>
  );
}

export default App;
