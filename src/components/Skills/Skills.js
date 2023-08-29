//Importing react bootstrap components
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

//Importing the utils
import addObserver from "../../utils/observer";

//Importing additional Carousel
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

//Importing custom components
import CircularProgress from "./CircularProgress";

//Importing styles
import "../../styles/Skills/Skills.css";

//Importing animate.css
import "animate.css";

//Importing skills array
import skillList from '../../data/Skills'

//Importing assets
import bottomLeft from '../../assets/images/bottom-left-skill-bg.png'
import topRight from '../../assets/images/right-skill-bg.png'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Skills() {
  const [isVisible,setisVisible]=useState(false)  
  const headRef=useRef()
  useEffect(()=>{
    addObserver(headRef.current,setisVisible)
  },[])
  return (
    <section id="skills">
    <div ref={headRef}></div>
      <Container>
      <div  className={isVisible&&'animate__animated animate__fadeInUp'}>
        <h1>Language, Framework, and Development</h1>
        <p className="sub-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence
        </p>
        </div>
        <Carousel responsive={responsive} className="skill-carousel">
          {skillList.map((skill)=>(<CircularProgress value={skill.value} text={skill.text} size={150} />))}
        </Carousel>
      </Container>
      <img src={bottomLeft} className="bottom-left"/>
      <img src={topRight} className="top-right"/>
    </section>
  );
}

export default Skills;
