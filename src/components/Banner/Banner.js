//Importing React Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Importing styles
import '../../styles/Banner/Banner.css'

//Importing assets
import mainImage from '../../assets/images/header.svg'

//Importing utilities
import typeText from "../../utils/Banner";
import { useState,useEffect } from "react";

//Importing components
import Slider from '../Slider'

function Banner({toRotate,greeting,isExtended}) {
    const [wordIndex,setWordIndex]=useState(0);
    const [delta,setDelta]=useState(0)
    const [text,setText]=useState('');
    const [isDeleting,setIsDeleting]=useState(false);

    useEffect(() => {
      let ticker=setInterval(()=>{typeText(text,setText,wordIndex,setWordIndex,isDeleting,setIsDeleting,setDelta,toRotate)},delta);
      return()=>{clearInterval(ticker)}
    }, [text]);

  return (
    <section id="banner" className={isExtended&&'extended'}>
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <div>
                <span className="greeting">{greeting}</span> 
                <div className="typing-container">
                <h1 className="typing-text">Hello there! I'm Brandon as a <span>{text}</span></h1>
                </div>
                <p className="sub-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Ipsum.</p>
            </div>
            <div className="slider-container">
            <Slider text={"Know me better"}/>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img className="main-image img-fluid" src={mainImage}></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
