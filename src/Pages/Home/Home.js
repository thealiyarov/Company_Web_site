import React from "react";
import Navbar from "../../Component/Navbar/Navbar"
import Maintop from "../../Component/Maintop/Maintop";
import Maincenter from "../../Component/Maincenter/Maincenter";
import Mainbottom from "../../Component/Mainbottom/Mainbottom";
import Footer from "../../Component/Footer/Footer";


function App() {
  return (
    <div className="App ">
      <Maintop/>
      <Maincenter/>
      <Mainbottom/>
      <Footer/>
    </div>
  );
}

export default App;