//Importing the hooks
import React, { useEffect, useRef, useState } from "react";

//Importing react bootstrap components
import { Container, Row, Col } from "react-bootstrap";

//Importing the styles
import "../../styles/Contact/Contact.css";

//Importing utilities
import addObserver from "../../utils/observer";

//Importing custom components
import FormInput from "./FormInput";
import Slider from "../Slider";
import CustomAlert from "./CustomAlert";

//Importing the assets
import mainImage from "../../assets/images/contact-img.svg";

//Importing the utilities
import { initValue, sendEmail } from "../../utils/Contact";

function Contact() {
  //Intersection requirement
  const [notifVisible, setNotifVisible] = useState(false);
  const [imgVisible, setimgVisible] = useState(false);
  const notifRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    addObserver(imgRef.current, setimgVisible);
    addObserver(notifRef.current, setNotifVisible);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setimgVisible(imgVisible);
      setNotifVisible(notifVisible);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [imgVisible, notifVisible]);

  //Form requirement
  const [formValue, setFormValue] = useState(initValue);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
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
              <div className="img-container" ref={imgRef}>
                <div
                  className={
                    imgVisible &&
                    "animate__animated animate__zoomIn zoom-container"
                  }
                >
                  <img src={mainImage} />
                </div>
              </div>
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
                  <div
                    className="send-slider"
                    onClick={() => {
                      sendEmail(formValue, setStatus, setButtonText);
                    }}
                  >
                    <Slider text={buttonText} />
                  </div>
                </Col>
                <Col sm={12} className="alert-col" ref={notifRef}>
                <div className="alert-placeholder">
                  {status.message && (
                    <div
                      className={
                        notifVisible && "animate__animated animate__fadeInUp"
                      }
                    >
                      <div className="alert-container">
                        <CustomAlert
                          status={status.status}
                          message={status.message}
                        />
                      </div>
                    </div>
                  )}
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
