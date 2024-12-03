import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./Components/Navbar";
import Section1 from "./Sections/Section1";
import Section4 from "./Sections/Section4";
import Section2 from "./Sections/Section2";
import StepstoFollow from "./Sections/StepstoFollow";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <CustomNavbar />
      <Section1 />
      <Section2/>
      <Section4/>
      <StepstoFollow />
    <Footer/>
    </>
  );
}

export default App;