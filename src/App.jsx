import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0); //to declare a new state variable

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <TextForm />

        {/* this is a comment 
        my-4 means we have provided a margin of 4 in y axis */}

        {/*<About />*/}
      </div>
    </>
  );
}

export default App;
