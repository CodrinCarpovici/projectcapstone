import "./App.scss";
import Details from "./components/Details";
import Footer from "./components/Footer";
import About from "./components/About";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Reserve from "./components/Reserve";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav id="navbar" />
      <Routes>
        <Route path="/" element={<Main id="main-section" />}></Route>
        <Route path="/about" element={<About id="about" />}></Route>
        <Route path="/booking-details" element={<Details id="details-page" />}>
        </Route>
      </Routes>

      <Footer id="footer" />
    </>
  );
}

export default App;
