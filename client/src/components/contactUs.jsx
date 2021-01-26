import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { postContactus } from "../services/ContactUs";
class ContactUs extends Component {
  state = {
    error: false,
    disableButton: false,
    Contact: {
      name: "",
      email: "",
      message: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disableButton: true });
    const re = this.validateEmail(this.state.Contact.email);
    if (!re) {
      this.setState({ error: true });
      return;
    }
    postContactus(this.state.Contact)
      .then((res) => {
        this.setState({ disableButton: false });
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        this.setState({ disableButton: false });

        console.log(err.response);
      });
  };
  handleChange = (e) => {
    const Contact = { ...this.state.Contact };
    Contact[e.target.id] = e.target.value;
    this.setState({ Contact });
  };
  validateEmail = (email) => {
    this.setState({ error: false });
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  render() {
    return (
      <div className="contactus">
        <div className="row contactusForm">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="col s12 m12">
              <strong>
                <h5>Contact Us</h5>
              </strong>
            </div>
            <div className="col s12 m12" style={{ marginTop: "1%" }}>
              <TextField
                required={true}
                value={this.state.Contact.name}
                onChange={this.handleChange}
                id="name"
                label="Name"
                multiline
                className="input"
                style={{ width: "50%" }}
                variant="outlined"
              />
            </div>
            <div className="col s12 m12" style={{ marginTop: "1%" }}>
              <TextField
                error={this.state.error}
                helperText="Enter Valid Email"
                required={true}
                value={this.state.Contact.email}
                onChange={this.handleChange}
                id="email"
                multiline
                type="email"
                style={{ width: "50%" }}
                label="Email"
                variant="outlined"
              />
            </div>

            <div className="col s12 m12" style={{ marginTop: "1%" }}>
              <TextField
                required={true}
                value={this.state.Contact.message}
                onChange={this.handleChange}
                id="message"
                style={{ width: "50%" }}
                multiline
                label="Message"
                rows={6}
                variant="outlined"
              />
            </div>
            <div className="col s12 m12 l12">
              {" "}
              <button disabled={this.state.disableButton}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
