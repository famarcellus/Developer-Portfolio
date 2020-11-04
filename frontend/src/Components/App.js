import React from "react";
import './App.scss';
import NavBar from "./Page_Layout/NavBar";
import AboutMe from "./Page_Layout/AboutMe";
import Projects from "./Page_Layout/Projects";
import Footer from "./Page_Layout/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
