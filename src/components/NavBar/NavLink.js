import Nav from "react-bootstrap/Nav";

function NavLink({setActiveLink,activeLink}) {
  return (
    <Nav className="me-auto ms-5 navbar-link">
      <Nav.Link
        href="#home"
        className={activeLink === "home" && "active"}
        onClick={() => setActiveLink("home")}
      >
        Home
      </Nav.Link>
      <Nav.Link
        href="#skills"
        className={activeLink === "skill" && "active"}
        onClick={() => setActiveLink("skill")}
      >
        Skill
      </Nav.Link>
      <Nav.Link
        href="#projects"
        className={activeLink === "project" && "active"}
        onClick={() => setActiveLink("project")}
      >
        Projects
      </Nav.Link>
      
    </Nav>
  );
}

export default NavLink;
