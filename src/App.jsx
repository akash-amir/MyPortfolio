import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import './App.css'
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skill from "./components/Skill"
import Project from "./components/Project"


function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Herosection></Herosection>
    <About></About>
    <Project></Project>
    <Skill></Skill>
    <Contact></Contact>
    <Footer></Footer>
   
    </>
  )
}

export default App
