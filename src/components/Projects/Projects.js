//Import animate.css
import "animate.css";

//Importing utilities
import addObserver from '../../utils/observer'

//Importing react-bootstrap component
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

//Importing the styles
import "../../styles/Projects/Projects.css";

//Importing custom components
import CustomTabs from "./CustomTabs";


function Projects() {
  const headRef=useRef();
  const [isVisible,setisVisible]=useState(false);
  useEffect(()=>{
    addObserver(headRef.current,setisVisible)
  },[]);
  return (
    <section id="projects">
      <Container>
      <div ref={headRef}></div>
        <div  className={isVisible&&"animate__animated animate__fadeInUp"}>
          <h1>Projects</h1>
          <p className="section-sub-text">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search f
          </p>
        </div>
        <div className="grid-container">
          <CustomTabs />
        </div>
      </Container>
    </section>
  );
}

export default Projects;
