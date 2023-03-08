import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav id="navbar"/>
      <Header id="main-header"/>
      <Main id="main-section"/>
      <Footer id="footer"/>
    </>
  );
}

export default App;
