import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Features from "./components/Features";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
