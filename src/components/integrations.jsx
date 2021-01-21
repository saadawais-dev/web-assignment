import React, { Component } from "react";
class Integration extends Component {
  state = {};
  render() {
    return (
      <div className="integrations">
        <div className="row integrationRow">
          <div className="col m3 s12">
            <h2>
              <strong>Integrations</strong>
            </h2>
          </div>
          <div className="col m3 s12">
            <h5>Get your data where it needs to be</h5>
            <p>
              We have hooks for you to push your attendee data anywhere you want
              it. Salesforce, Eloqua, Marketo, iMIS, Personify, etc.
            </p>
          </div>

          <div className="col m3 s12">
            {" "}
            <h5>Populate and Validate Attendees</h5>
            <p>
              Our API hooks can call out to third party APIs and validate
              membership to an association or just populate their record from
              your CRM.
            </p>
          </div>
          <div className="col m3 s12">
            {" "}
            <h5>Custom development</h5>
            <p>
              Even though we are a self-service drag and drop system, we
              understand you may have complex needs and our system is setup for
              us to develop custom hooks for any crazy things that need to get
              done! The great thing is we can hook the custom development
              directly into the site you build yourself!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Integration;
