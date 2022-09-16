import "./App.css";
import Navbar from "./Component/Navbar";
import Postrequest from "./Component/Postrequest";
import Register from "./Component/Register";
import Search from "./Component/Search";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Login from "./Component/Login";

function App() {
  return (
    // Set context
    <BrowserRouter>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/request" element={<Postrequest />}></Route>
          <Route exact path="/finddoner" element={<Search />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
