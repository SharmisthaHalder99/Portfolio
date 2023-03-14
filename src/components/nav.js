import React, { useState } from "react";
import { ReactComponent as MobileNav } from "../assets/nav-icon.svg";

import { ReactComponent as Logo } from "../assets/logo.svg";
import Sidebar from "./sidebar";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <Logo id='logo' />
        <div className='nav-links'>
          <div
            className='nav-ele'
            onClick={() => {
              window.location.href = "/#about-me";
            }}>
            About me
          </div>
          <div
            className='nav-ele'
            onClick={() => {
              window.location.href = "/#career";
            }}>
            Career
          </div>
          <div
            className='nav-ele'
            onClick={() => {
              window.location.href = "/#my-works";
            }}>
            My works
          </div>
          <a href='mailto:shalder99.ee@gmail.com'>Contact me</a>
        </div>
        <div
          className='mobile-nav'
          onClick={() => {
            setOpen(true);
          }}>
          <MobileNav id='menu' />
        </div>
      </nav>
      {open && <Sidebar setOpen={setOpen} />}
    </>
  );
};
export default NavBar;
