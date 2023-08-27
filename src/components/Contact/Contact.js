//Importing the hooks
import React, { useState } from "react";

//Importing react bootstrap components
import { Container, Row, Col } from "react-bootstrap";

//Importing the styles
import "../../styles/Contact/Contact.css";

//Importing custom components
import FormInput from "./FormInput";
import Slider from "../Slider";

//Importing the assets
import mainImage from "../../assets/images/contact-img.svg";

function Contact() {
  const initValue = {
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  };
  const [formValue, setFormValue] = useState(initValue);
  const changeHandler = (field, target) => {
    setFormValue((obj) => {
      return { ...obj, [field]: target };
    });
  };
  return (
    <section id="contact">
      <Container>
        <form>
          <Row>
            <Col className="image-col" md={12} lg={6}>
              <img src={mainImage} className="img-fluid" />
            </Col>
            <Col md={12} lg={6} className="form-col">
              <h1>Contact me!</h1>
              <Row>
                <Col sm={12} md={6} className="form-col">
                  <FormInput
                    placeholder={"First Name"}
                    onChange={(e) => {
                      changeHandler("firstName", e.target.value);
                    }}
                    value={formValue.firstName}
                  />
                </Col>
                <Col sm={12} md={6} className="form-col">
                  <FormInput
                    placeholder={"Last Name"}
                    onChange={(e) => {
                      changeHandler("lastName", e.target.value);
                    }}
                    value={formValue.lastName}
                  />
                </Col>
                <Col sm={12} md={6} className="form-col">
                  <FormInput
                    placeholder={"Email"}
                    onChange={(e) => {
                      changeHandler("email", e.target.value);
                    }}
                    value={formValue.email}
                  />
                </Col>
                <Col sm={12} md={6} className="form-col">
                  <FormInput
                    placeholder={"Topic"}
                    onChange={(e) => {
                      changeHandler("topic", e.target.value);
                    }}
                    value={formValue.topic}
                  />
                </Col>
                <Col sm={12} className="form-col">
                  <textarea
                    placeholder="Message"
                    value={formValue.message}
                    onChange={(e) => {
                      changeHandler("message", e.target.value);
                    }}
                  ></textarea>
                </Col>
                <Col sm={6} className="send-col">
                  <div className="send-slider">
                    <Slider text={"Send"} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
}

export default Contact;
