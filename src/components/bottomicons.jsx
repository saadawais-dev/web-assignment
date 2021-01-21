import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import p18 from "../images/p18.png";
const BottomIcons = (props) => {
  return (
    <>
      <div className="row bottomIcons">
        <TwitterIcon className="socialIcons"></TwitterIcon>
        <FacebookIcon className="socialIcons"></FacebookIcon>
        <InstagramIcon className="socialIcons"></InstagramIcon>
      </div>
      <div className="row">
        <img className="parallel18Img" src={p18}></img>
        <p style={{ textAlign: "center" }}> Made with ❤ from Puerto Rico</p>
      </div>
    </>
  );
};

export default BottomIcons;
