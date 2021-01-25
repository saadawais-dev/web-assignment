import React, { Component } from "react";
import img from "../images/eventray.png";
import M from "materialize-css/dist/js/materialize.min.js";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
class NavBar extends Component {
  state = {};

  componentDidMount() {
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div>
        <nav className="navBar">
          <div className="nav-wrapper ">
            <a href="#!" className="brand-logo ">
              <img src={img} className="logo"></img>
            </a>
            <a class="sidenav-trigger" data-target="mobile-nav">
              <i class="material-icons">menu</i>
            </a>
            <ul className=" hide-on-med-and-down center ">
              <li className="navbarLi">
                <a> Home</a>
              </li>
              <li className="navbarLi">
                <a>Features</a>
              </li>
              <li className="navbarLi">
                <a>Pricing</a>
              </li>
              <li className="navbarLi">
                <a>Partners</a>
              </li>
              <li className="navbarLi">
                <a>OnSite Support</a>
              </li>
              <li className="navbarLi">
                <a>Contact</a>
              </li>
              <li className="navbarLi">
                <Select
                  defaultValue="English"
                  style={{
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Espanol">Espanol</MenuItem>
                </Select>
              </li>
              <ul className="right">
                <li>
                  <button className="navButtons">Sign In</button>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <button className="navButtons ">Sign Up</button>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Onsite Support</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
