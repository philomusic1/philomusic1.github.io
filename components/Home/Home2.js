import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";







function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a lover of Traditions and Languages and I love learning 
                new languages and different cultures and traditions. I know many languages 
                <br />
                <br />and I am still learning more languages like 
                <i>
                  <b className="purple"> C++, Persian and Turkish. </b>
                </i>
                <br />
                <br />
                My field of Interests are Education, Knowledge, Poetry &nbsp;
                <i>
                  <b className="purple">Languages, Traditions </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Justice.
                     </b>
                     </i>
                     <br />
                     <br />
                     Whenever possible, I also apply my passion to create diversity, justice, peace
                     and unity <b className="purple">Node.js</b> and
                    <i>
                    <b className="purple">
                  {" "}
                  amongst everyone to create a positive world.
                </b>
                     </i>
                     &nbsp; like
                     <i>
                        <b className="purple"> React.js and Next.js</b>
                     </i>
                     </p>
                     </Col>
                     <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/philomusic1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >  
                <AiFillGithub />
                </a>
                </li>
                </ul>
                </Col>
                </Row>
                </Container>
                </Container>
    );
}
export default Home2;