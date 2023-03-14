import React from "react";
import { ReactComponent as BannerImage } from "../assets/banner-img.svg";
import LinkedinLogo from "../assets/linkedin.png";
import BehanceLogo from "../assets/behance.png";
import DribbbleLogo from "../assets/dribbble.png";
import InstaLogo from "../assets/insta.png";
import GithubLogo from "../assets/github.png";
import { ReactComponent as Stars } from "../assets/stars.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Line } from "../assets/curve-line.svg";
import { ReactComponent as King } from "../assets/king.svg";

const Banner = () => {
  return (
    <div className='banner-container'>
      <Stars id='stars' />
      <Arrow id='arrow' />

      <div className='banner-text'>
        <h3>Hello</h3>
        <h2>I’m Sharmistha Halder</h2>
        <h4>UI/UX Designer</h4>
        <p>
          I’m creative designer based in India and I’m very passionate and
          dedicated to my work
        </p>
        <div className='buttons'>
          <button
            className='cv-btn'
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}>
            Download CV
          </button>
          <a href='mailto:shalder99.ee@gmail.com'>
            <button className='hire-btn'>Hire me</button>
          </a>
        </div>
      </div>
      <BannerImage id='banner-image' />
      <div className='links'>
        <a
          href='https://www.linkedin.com/in/sharmistha-halder-021140209/'
          target='_blank'
          rel='noreferrer'>
          <img alt='' src={LinkedinLogo}></img>
        </a>
        <a
          href='https://dribbble.com/Sharmistha99'
          target='_blank'
          rel='noreferrer'>
          <img alt='' src={DribbbleLogo}></img>
        </a>
        <img alt='' src={InstaLogo}></img>
        <a
          href='https://github.com/SharmisthaHalder99'
          target='_blank'
          rel='noreferrer'>
          <img alt='' src={GithubLogo}></img>
        </a>
        <a
          href='https://www.behance.net/sharmishalder'
          target='_blank'
          rel='noreferrer'>
          <img alt='' src={BehanceLogo}></img>
        </a>
      </div>
      <Line id='line' />
      <King id='king' />
    </div>
  );
};
export default Banner;
