import React, { useState } from "react";
import Bluetick from "../assets/Bluetick.png";
import Kylo from "../assets/Kylo.png";
import Virtubox from "../assets/Virtubox.png";
import { ReactComponent as Arrow } from "../assets/about-line.svg";

const Career = () => {
  const data = [
    {
      company: "Bluetick",
      description:
        "I have extensive experience in app and website design, with a strong focus on creating SEO-friendly websites. In my portfolio, you will find a diverse range of projects, including several apps and websites that I have successfully designed and launched.  ",
      role: "UI Developer",
      duration: "AUGUST 1ST 2022 - PRESENT",
    },
    {
      company: "Kylo",
      description:
        "I have designed various genres of apps here and also handled different clients . ",
      role: "UI/UX Intern",
      duration: "SEPTEMBER 3RD 2021 - OCTOBER 3RD 2021 ",
    },
    {
      company: "Virtubox",
      description:
        "I have designed several websites and apps and also designed  consoles (CMS). Apart from that, I did several market research regarding CMS and layouts. ",
      role: "UI/UX Intern ",
      duration: "MAY 3RD 2021 - SEPTEMBER 3RD 2021 ",
    },
  ];
  const [selectCompany, setSelectCompany] = useState("Bluetick");
  return (
    <div className='career-container' id='career'>
      <Arrow id='career-arrow' />
      <h3>Career</h3>
      <div className='tab-wrapper'>
        <div className='tab-container'>
          <div
            className='career-detail'
            style={{
              borderLeft: selectCompany === "Bluetick" && "6px solid #CC6152",
            }}
            onClick={() => {
              setSelectCompany("Bluetick");
            }}>
            <img alt='' src={Bluetick}></img>
            <h2>Bluetick Consultants LLP</h2>
          </div>
          <div
            className='career-detail'
            style={{
              borderLeft: selectCompany === "Kylo" && "6px solid #CC6152",
            }}
            onClick={() => {
              setSelectCompany("Kylo");
            }}>
            <img alt='' src={Kylo}></img>
            <h2>Kylo Apps</h2>
          </div>
          <div
            className='career-detail'
            style={{
              borderLeft: selectCompany === "Virtubox" && "6px solid #CC6152",
            }}
            onClick={() => {
              setSelectCompany("Virtubox");
            }}>
            <img alt='' src={Virtubox}></img>
            <h2>VirtuBox Infotech Pvt Ltd</h2>
          </div>
        </div>
        <div className='tab-container-mobile'>
          <div
            className='career-detail'
            style={{
              borderBottom: selectCompany === "Bluetick" && "6px solid #CC6152",
            }}
            onClick={() => {
              setSelectCompany("Bluetick");
            }}>
            <img alt='' src={Bluetick}></img>
            <h2>Bluetick Consultants LLP</h2>
          </div>
          <div
            className='career-detail'
            style={{
              borderBottom: selectCompany === "Kylo" && "6px solid #CC6152",
            }}
            onClick={() => {
              setSelectCompany("Kylo");
            }}>
            <img alt='' src={Kylo}></img>
            <h2>Kylo Apps</h2>
          </div>
          <div
            className='career-detail'
            style={{
              borderBottom: selectCompany === "Virtubox" && "6px solid #CC6152",
            }}
            onClick={() => {
              setSelectCompany("Virtubox");
            }}>
            <img alt='' src={Virtubox}></img>
            <h2>VirtuBox Infotech Pvt Ltd</h2>
          </div>
        </div>
        <div className='tab-detail'>
          <div className='detail-text'>
            <div className='role'>
              {
                data.filter((e) => {
                  return e.company === selectCompany;
                })[0].role
              }
            </div>
            <div className='duration'>
              {
                data.filter((e) => {
                  return e.company === selectCompany;
                })[0].duration
              }
            </div>
            <div className='description'>
              {
                data.filter((e) => {
                  return e.company === selectCompany;
                })[0].description
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
