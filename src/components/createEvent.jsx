import React, { Component } from "react";
import image from "../images/img1.png";
class CreateEvent extends Component {
  state = {};
  render() {
    return (
      <div className="createEvents">
        <div className="row">
          <div className="col s12 m6 imagecol">
            {" "}
            <img className="responsive-img eventImage" src={image} />{" "}
          </div>
          <div className="col s12 m6 createEventCol">
            <h1>
              <strong>The fastest way to build your registration form</strong>
            </h1>
            <p>
              Reclaim your nights and weekends. You are in control with our drag
              and drop form builder, customizable real-time reports,
              mobile-friendly website, and advanced conditional logic that does
              not require a developer to build.
            </p>
            <br></br>
            <p>Start creating your website for free.</p>
            <button className="btn-large waves-effect waves-light red ">
              Create your first Event
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
