import "./App.scss";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Spinner from "./Spinner?v=1";

const Main = lazy(() => import("./components/Main"));
const About = lazy(() => import("./components/About"));
const Details = lazy(() => import("./components/Details"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Nav id="navbar" />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Main id="main-section" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={<Spinner />}>
              <About id="about" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/booking-details/*"
          element={
            <Suspense fallback={<Spinner />}>
              <Details id="details-page" />
            </Suspense>
          }
        ></Route>
      </Routes>

      <Suspense fallback={<Spinner />}>
        <Footer id="footer" />
      </Suspense>
    </>
  );
}

export default App;
