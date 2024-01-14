import "./App.css";
import React from "react";
import { AllRoutes } from "./allRoutes/AllRoutes";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App dark:text-white dark:bg-neutral-800 ">
      <div>
        <Header />
        <AllRoutes />
        <Footer /></div>
      
    </div>
  );
}

export default App;
