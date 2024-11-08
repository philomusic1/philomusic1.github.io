import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascrpt1 } from "react-icons/di";

function Techstack() {
    return (
       <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascrpt1 />
        </Col>
       </Row>
    );
}

export default Techstack;