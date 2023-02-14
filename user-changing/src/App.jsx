import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
