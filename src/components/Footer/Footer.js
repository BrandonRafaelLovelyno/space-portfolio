//Importing styles
import "../../styles/Footer/Footer.css";

//Importing custom components
import NavSpan from "../NavBar/NavSpan";

//Importing the assets
import footerBackground from "../../assets/images/footer-bg.png";
import logo from "../../assets/images/logo.svg";

//Importing react bootstrap components
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const style = {
    backgroundImage: `url(${footerBackground})`,
  };
  return (
    <section id="footer" style={style}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img src={logo} className="footer-logo" />
          </Col>
          <Col sm={12} md={6} className="span-col">
            <NavSpan />
            <p>Copyright 2055. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
