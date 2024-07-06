import "./scss/main.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Services from "./components/Services";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Blog from "./components/Blog";
import GetInTouch from "./components/GetInTouch";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Shop />
      <Services />
      <About />
      <OurTeam />
      <Blog />
      <GetInTouch />
    </>
  );
};

export default App;
