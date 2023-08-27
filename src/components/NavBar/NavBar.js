//Import React Bootstrap import
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

//Import custom components
import NavLink from "./NavLink";
import Navbar from "react-bootstrap/Navbar";
import Slider from "../Slider";
import NavSpan from "./NavSpan";

//Personal assets import
import logo from "../../assets/images/logo.svg";

//Utils function import
import {windowScroll,windowUnscroll,handleScroll,navExtend,unmountNavExtend} from '../../utils/Navbar'

//CSS file import
import '../../styles/NavBar/NavBar.css'

function NavBar({setNavExtended}) {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navBarScroll=()=>{
    handleScroll(setScrolled)
  }
  const changeNavExtend=()=>{
    setNavExtended(prev=> !prev)
  }
  useEffect(() => {
    navExtend(changeNavExtend)
    windowScroll(navBarScroll);
    return () => {
      unmountNavExtend(changeNavExtend);
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
        <NavLink setActiveLink={setActiveLink} activeLink={activeLink}/>
        <div className="links-connect">
        <NavSpan/>
        <Slider text={"Let's connect"}/>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
