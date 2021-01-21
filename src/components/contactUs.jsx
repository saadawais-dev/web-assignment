import React, { Component } from "react";
class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="contactus">
        <div className="row">
          <div className="col s12 m12">
            <strong>
              <h5>Email Us at</h5>
            </strong>
          </div>
          <div className="col s12 m12">
            <p>hello@eventray.com</p>
          </div>
          <div className="col s12 m12">
            <strong>
              <h5>Call us at</h5>
            </strong>
          </div>
          <div className="col s12 m12">+1-888-332-4232</div>
          <div className="col s12 m12">
            <strong>
              <h5>Get in touch</h5>
            </strong>
          </div>
          <div className="col s12 m12">
            <p>
              We would love to hear from you if you have any questions, want a
              demo, or just have some feedback on our product!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
