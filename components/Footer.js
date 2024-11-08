import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    let date = new date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
            <Col md="4" className="footer-copyright">
                <h3>Copyright {year} 5B</h3>
              </Col>
              <Col md="4" className="footer-body"
                <ul className="footer-icons">
                  <li className="social-icons">
                    <a
                    href="https://github.com/philomusic1"
                    style={{ color:"white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <AiFillGithub />
                   </a>
                 </li>
                </ul>
               </Col>
            </Row>
        </Container>
      );
}

export default Footer;