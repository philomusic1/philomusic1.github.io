import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hello, I am <span className="purple">Philomusic1 </span>
              from <span className="purple"> Unkown.</span>
              <br />
              I am currently doing hackclub projects to build my skills.
              <br />
              <br />
              Apart from doing hackclub projects, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Making Music
              </li>
              <li className="about-activity">
                <ImPointRight /> Listening to music
              </li>
            </ul>
  
            <p style={{ color: "rgb(155 126 172)" }}>
              "quote coming soon"{" "}
            </p>
            <footer className="blockquote-footer">Philomusic1</footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
  
  export default AboutCard;