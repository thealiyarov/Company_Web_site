import React from "react";
import Navbar from "./Component/Navbar/Navbar"
import Maintop from "./Component/Maintop/Maintop";
import Maincenter from "./Component/Maincenter/Maincenter";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Maintop/>
      <Maincenter/>
      <Footer/>
    </div>
  );
}

export default App;
