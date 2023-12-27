import React from "react";
import Maintop from "../../Component/Maintop/Maintop";
import Maincenter from "../../Component/Maincenter/Maincenter";
import Mainbottom from "../../Component/Mainbottom/Mainbottom";


function App() {
  return (
    <div className="App w-[100%] ">
      <Maintop/>
      <Maincenter/>
      <Mainbottom/>
    </div>
  );
}

export default App;