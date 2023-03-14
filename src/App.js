import "./App.scss";
import About from "./components/AboutMe";

import Banner from "./components/banner";
import Career from "./components/career";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import Works from "./components/works";

function App() {
  return (
    <>
      <NavBar />
      {/* <NavBar /> */}
      <Banner />
      <About />
      <Career />
      <Works />
      <Footer />
    </>
  );
}

export default App;
