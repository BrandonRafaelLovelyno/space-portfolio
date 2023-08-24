//Import React Bootstrap import
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

//Import custom components
import NavLink from "./NavLink";
import Navbar from "react-bootstrap/Navbar";
import NavSpan  from "./NavSpan";
import Slider from "../Slider";

//Personal assets import
import logo from "../../assets/images/logo.svg";

//Utils function import
import {windowScroll,windowUnscroll,handleScroll} from '../../utils/Navbar'

//CSS file import
import '../../styles/NavBar/NavBar.css'

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navBarScroll=()=>{
    handleScroll(setScrolled)
  }
  useEffect(() => {
    windowScroll(navBarScroll);
    return () => {
      windowUnscroll(navBarScroll);
    };
  }, []);

  return (
    <Navbar expand="lg"  variant="dark" className={scrolled == true && "scrolled"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink/>
        </Navbar.Collapse>
        <NavSpan/>
        <Slider text={"Let's connect"}/>
      </Container>
    </Navbar>
  );
}

export default NavBar;
