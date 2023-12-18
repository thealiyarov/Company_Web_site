import React from "react";
import Navbar from "./Component/Navbar/Navbar"
import Maintop from "./Component/Maintop/Maintop";
import Maincenter from "./Component/Maincenter/Maincenter";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Maintop/>
      <Maincenter/>
    </div>
  );
}

export default App;
