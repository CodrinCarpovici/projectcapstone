import "./App.scss";
import Details from "./components/Details";
import Footer from "./components/Footer";
import About from "./components/About";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Reserve from "./components/Reserve";
import Confirmation from "./components/Confirmation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import FormDataContext from "./components/FormDataContext";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <>
      <Nav id="navbar" />
      <Routes>
        <Route path="/" element={<Main id="main-section" />}></Route>
        <Route path="/about" element={<About id="about" />}></Route>
        <Route
          path="/booking-details"
          element={
            <FormDataContext.Provider value={{ formData, setFormData }}>
              <Details id="details-page" />
            </FormDataContext.Provider>
          }
        ></Route>
        <Route
          path="/confirm-reservation"
          element={
            <FormDataContext.Provider value={{ formData, setFormData }}>
              <Reserve id="reserve-page" />{" "}
            </FormDataContext.Provider>
          }
        ></Route>
        <Route
          path="/booking-confirmed"
          element={
            <FormDataContext.Provider value={{ formData, setFormData }}>
              <Confirmation id="confirmation-page" />
            </FormDataContext.Provider>
          }
        ></Route>
      </Routes>

      <Footer id="footer" />
    </>
  );
}

export default App;
