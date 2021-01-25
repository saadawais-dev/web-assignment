import React, { Component } from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MobileFriendlyRoundedIcon from "@material-ui/icons/MobileFriendlyRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
class WhyUseEventRAy extends Component {
  state = {};
  render() {
    return (
      <div className="whyUse">
        <div className="row whyUseHeading">
          <div className="col m12 s12">
            <h1>
              <strong>Why use EventRay?</strong>
            </h1>
            <br />
            <p>
              It’s time to love your registration software again. Just because
              we are fast, doesn’t mean we are not powerful.
            </p>
          </div>
        </div>
        <div className="row reports">
          <div className="col m4 s12">
            <div className="row">
              <TrendingUpIcon
                className="icons"
                color="primary"
                fontSize="large"
              ></TrendingUpIcon>
              <h5>Real-time Reporting</h5>
              <p>
                You can build and customize reports the way you need them! All
                drag and drop and real-time. Get to any information about your
                attendees in seconds! Choose your columns and filter attendees
                on any data collected.
              </p>
            </div>
            <div className="row">
              {" "}
              <MobileFriendlyRoundedIcon
                className="icons"
                color="primary"
                fontSize="large"
              ></MobileFriendlyRoundedIcon>
              <h5>Mobile Responsive</h5>
              <p>
                Manage your event anytime, anywhere! 40% of attendees now
                register for events via mobile, so you should expect nothing
                less than a mobile responsive website from your registration.
              </p>
            </div>
          </div>
          <div className="col m4 s12 iframe">
            <div className="">
              <iframe
                title="Event Ray"
                width="100%"
                height="100%"
                src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col m4 s12">
            <div className="row">
              <SettingsRoundedIcon
                color="primary"
                className="icons"
                fontSize="large"
              ></SettingsRoundedIcon>
              <h5>Conditional Logic</h5>
              <p>
                Developing power in your hands! Don’t waste your time and money
                waiting for a developer to build your complex logic. Need to
                hide questions, require responses, skip pages or create custom
                paths? Do it yourself with our easy drag and drop logic tools!
              </p>
            </div>
            <div className="row">
              {" "}
              <PostAddRoundedIcon
                className="icons"
                color="primary"
                fontSize="large"
              ></PostAddRoundedIcon>
              <h5>Attendee management</h5>
              <p>
                We understand registration! We have powerful search engine to
                quickly get you to the attendee you need, from there you can
                manage finances, answers, and promo codes all within EventRay.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUseEventRAy;
