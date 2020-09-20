import React from "react";
import Login from "./Login";

const currentTime = new Date().getHours();
var isUserRegistered = false;

function App() {
  return (
    <div className="container">
      {<Login isUserRegistered={isUserRegistered} />}
      {currentTime > 16 && <h2>Good Evening</h2>}
    </div>
  );
}

export default App;
