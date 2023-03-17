import "./App.scss";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Reserve from "./components/Reserve";
import Confirmation from "./components/Confirmation.js"
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Nav id="navbar"/>
      <Header id="main-header"/>
      <Main id="main-section"/>
      <Details id="details-page" />
      <Reserve id ="reserve-page" />
      <Confirmation id="confirmation-page" />
      <Footer id="footer"/>
    </>
  );
}

export default App;
