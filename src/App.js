import React from "react";
import "./style.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Contact />
    </>
  );
}

export default App;
