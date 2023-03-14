import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import LinkedinLogo from "../assets/linkedin.png";
import BehanceLogo from "../assets/behance.png";
import DribbbleLogo from "../assets/dribbble.png";
import InstaLogo from "../assets/insta.png";
import GithubLogo from "../assets/github.png";

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <Logo id='footer-logo' />
        <div className='footer-links'>
          <div
            className='footer-ele'
            onClick={() => {
              window.location.href = "/#my-works";
            }}>
            About me
          </div>
          <div
            className='footer-ele'
            onClick={() => {
              window.location.href = "/#my-works";
            }}>
            Career
          </div>
          <div
            className='footer-ele'
            onClick={() => {
              window.location.href = "/#my-works";
            }}>
            My works
          </div>
          <a href='mailto:shalder99.ee@gmail.com'>Contact me</a>
        </div>
        <div className='footer-links'>
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
      </div>
      <h3>COPYRIGHT © 2022 SHARMISTHA HALDER</h3>
    </footer>
  );
};
export default Footer;
