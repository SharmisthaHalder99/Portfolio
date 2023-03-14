import React from "react";
import Cross from "../assets/sidebar-cross.png";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Sidebar = ({ setOpen }) => {
  return (
    <div className='sidebar'>
      <img
        alt=''
        src={Cross}
        onClick={() => {
          setOpen(false);
        }}></img>
      <div className='sidebar-elements'>
        <div className='hr'></div>
        <div
          className='sidebar-ele'
          onClick={() => {
            window.location.href = "/#about-me";
          }}>
          About me
        </div>
        <div
          className='sidebar-ele'
          onClick={() => {
            window.location.href = "/#career";
          }}>
          Career
        </div>
        <div
          className='sidebar-ele'
          onClick={() => {
            window.location.href = "/#my-works";
          }}>
          My works
        </div>
        <a href='mailto:shalder99.ee@gmail.com'>Contact me</a>
        <div className='hr'></div>
      </div>
      <Logo id='sidebar-logo' />
    </div>
  );
};
export default Sidebar;
