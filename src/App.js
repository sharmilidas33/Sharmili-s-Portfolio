import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/NavBar/Home/Intro";
import Skills from "./components/About/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
