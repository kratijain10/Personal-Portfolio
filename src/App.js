import Navbar from "./components/NavBar/navbar"
import Intro from "./components/Intro/intro"
import Education from "./components/Education/education"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Project from "./components/Project/project"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
