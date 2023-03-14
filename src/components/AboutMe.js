import React, { useState } from "react";
import AboutImage from "../assets/about-image.png";
import Figma from "../assets/figma.png";
import Photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import { ReactComponent as Stars } from "../assets/stars.svg";
import { ReactComponent as AboutLine } from "../assets/about-line.svg";

const About = () => {
  const [selectTab, setSelectTab] = useState(false);
  return (
    <div className='about-me-container' id='about-me'>
      <AboutLine id='about-line' />
      <Stars id='about-stars' />
      <h3>About me</h3>
      <div className='about-wrapper'>
        <img alt='' src={AboutImage} id='about-img'></img>
        <div className='about-text'>
          <h4>I develop ideas that help people</h4>
          <p>
            As a UI/UX designer and web developer, I focus on creating
            innovative solutions that enhance the user experience and make life
            easier for people. I use my skills in design and development to
            develop ideas that are both functional and aesthetically pleasing,
            helping people to achieve their goals and make the most of the
            digital world.
          </p>
          <div className='tab'>
            <div
              className={`tab-options ${!selectTab && "active-option"}`}
              onClick={() => {
                setSelectTab(false);
              }}>
              {" "}
              Skills
            </div>
            <div
              className={`tab-options ${selectTab && "active-option"}`}
              onClick={() => {
                setSelectTab(true);
              }}>
              {" "}
              Education
            </div>
          </div>
          {!selectTab ? <Skills /> : <Education />}
        </div>
      </div>
    </div>
  );
};

export default About;

const Skills = () => {
  return (
    <div className='skills'>
      <img alt='' src={Figma}></img>
      <img alt='' src={Photoshop}></img>
      <img alt='' src={Illustrator}></img>
      <img alt='' src={Html}></img>
      <img alt='' src={Css}></img>
      <img alt='' src={Js}></img>
    </div>
  );
};

const Education = () => {
  return (
    <div className='education'>
      <h3>BTech in CSE</h3>
      <p>Calcutta Institute of Engineering and Management (2018-2022)</p>
      <h3> Higher Secondary </h3>
      <p>Bidya Bharati Girls High School (2016)</p>
      <h3>Secondary </h3>
      <p>Bidya Bharati School (2016)</p>
    </div>
  );
};
