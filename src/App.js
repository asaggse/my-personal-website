import React from "react";
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      {/* <Footer /> */}
      {/* Add other components here */}
    </div>
  );
}

export default App;
