import React, { Component } from "react";
import BottomIcons from "./bottomicons";
class BottomBar extends Component {
  state = {};
  render() {
    return (
      <div className="BottomBar">
        <div className="row ">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Partners</li>
            <li>Onsite Support</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>hello@eventray.com</li>
            <li></li>
          </ul>
        </div>
        <BottomIcons></BottomIcons>
      </div>
    );
  }
}

export default BottomBar;
