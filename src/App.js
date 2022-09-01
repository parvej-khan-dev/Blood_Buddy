import "./App.css";
import Navbar from "./Component/Navbar";

import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App ">
      <Navbar />
    </div>
  );
}

export default App;
