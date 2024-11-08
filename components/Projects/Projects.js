import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
    return (
        <Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              My Recent <strong className="purple">Work </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here is the one project i have worked on so far, more is to come.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  isBlog={false}
                  title="Hackpad"
                  description="A Custom designed macropad made to fulfil my need to make my work faster, includes an oled display and aRGB with QMK FW"
                  ghLink="https://github.com/philomusic1/hackpad"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default Projects; 