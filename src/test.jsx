import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <span>some text</span>
      <span id="val">and</span>
      <div id="val2" text="val">
        another
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
