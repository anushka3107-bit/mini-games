import React from "react";
import Header from "./Components/Header";
import "./App.css";
import MidSection from "./Components/MidSection";
import LastSection from "./Components/LastSection";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        {/* <MidSection /> */}
        <LastSection />
      </div>
    </div>
  );
};

export default App;
