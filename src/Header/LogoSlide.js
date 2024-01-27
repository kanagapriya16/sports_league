import React from "react";
import "../../src/styles/NavbarLogo.css";

import cs from "../assest/cs.png";
import delhi from "../assest/delhi.png";
import kings from "../assest/kings.png";
import kkr from "../assest/kkr.png";
import rcb from "../assest/rcb.png";
import srh from "../assest/srh.png";
import Wave from "./Wave";

export const LogoSlide = () => {
  return (
    <div>
     
      <div className="autoslide">
        <div className="logos">
          <div className="logo-slide">
            <img alt="" src={srh} />
            <img alt="" src={kings} />
            <img alt="" src={cs} />
            <img alt="" src={kkr} />
            <img alt="" src={rcb} />
            <img alt="" src={delhi} />
            <img alt="" src={cs} />
            <img alt="" src={rcb} />
          </div>
          <div className="logo-slide">
            <img alt="" src={srh} />
            <img alt="" src={kings} />
            <img alt="" src={cs} />
            <img alt="" src={kkr} />
            <img alt="" src={rcb} />
            <img alt="" src={delhi} />
            <img alt="" src={cs} />
            <img alt="" src={rcb} />
          </div>
        </div>
      </div>
    </div>
  );
};
