import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skills from './components/Skills/Skills'
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";

function App() {
  const [navExtended,setNavExtended]=useState(false);
  return (
    <>
    <NavBar setNavExtended={setNavExtended}/>
    <Banner isExtended={navExtended} greeting={'Welcome to my portfolio'} toRotate={['Student','Full stack developer','Software Engineer']}/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
