import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jay Roy. </span>
             I'm a Computer Science graduate with a passion for crafting user-friendly interfaces. <span className="purple"> </span>
            <br />
            <br />
            With <span className="purple"> 3 years </span> of experience, my expertise in <span className="purple">  Full Stack Development </span> and that has been pivotal in creating engaging web experiences.
            <br />
            {/* <br />
            From leading projects in augmented reality to building innovative web apps, 
            I thrive on making designs both visually appealing and seamlessly functional. 
           
            <br />
            <br />
              Proficient in JavaScript, HTML5, and CSS, I continually push the boundaries of what's possible in front-end development, 
              ensuring a delightful user experience.
            <br />
            <br /> */}
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
  <br />
           
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
