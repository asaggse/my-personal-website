import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      {showGoToTop &&
        <button className="go-to-top" onClick={handleGoToTop}>⬆</button>
      }
      <Footer />
    </div>
  );
}

export default App;
