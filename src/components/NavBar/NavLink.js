import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

function NavLink({setActiveLink,activeLink}) {
  return (
    <Nav className="me-auto ms-5">
      <Nav.Link
        href="#home"
        className={activeLink === "home" && "active"}
        onClick={() => setActiveLink("home")}
      >
        Home
      </Nav.Link>
      <Nav.Link
        href="#skill"
        className={activeLink === "skill" && "active"}
        onClick={() => setActiveLink("skill")}
      >
        Skill
      </Nav.Link>
      <Nav.Link
        href="#project"
        className={activeLink === "project" && "active"}
        onClick={() => setActiveLink("project")}
      >
        Projects
      </Nav.Link>
    </Nav>
  );
}

export default NavLink;
