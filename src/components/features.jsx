import React, { Component } from "react";
import PaymentIcon from "@material-ui/icons/Payment";
import MobileFriendlyRoundedIcon from "@material-ui/icons/MobileFriendlyRounded";
import RestoreIcon from "@material-ui/icons/Restore";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
import PeopleIcon from "@material-ui/icons/People";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import TranslateIcon from "@material-ui/icons/Translate";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TabletIcon from "@material-ui/icons/Tablet";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MenuIcon from "@material-ui/icons/Menu";
class Features extends Component {
  state = {};
  render() {
    return (
      <div className="features">
        <div className="row featuresHeading">
          <h3>
            <strong>Features</strong>
          </h3>
          <p>Developing power in your hands!</p>
        </div>
        <div className="row featureIconRow">
          <div className="col m4 s12 featureIconCol ">
            <PaymentIcon
              className="featureIcon"
              color="primary"
              fontSize="large"
            ></PaymentIcon>
            <p>Secure Credit Card Payment Processing</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <MobileFriendlyRoundedIcon
              className="featureIcon"
              color="primary"
              fontSize="large"
            ></MobileFriendlyRoundedIcon>
            <p>Mobile friendly website and backend</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <PersonIcon
              className="featureIcon"
              color="primary"
              fontSize="large"
            ></PersonIcon>
            <p>Manage your attendee and make changes to their responses</p>
          </div>
        </div>
        <div className="row featureIconRow">
          {" "}
          <div className="col m4 s12 featureIconCol">
            <RestoreIcon
              className="featureIcon"
              color="primary"
              fontSize="large"
            ></RestoreIcon>
            <p>Audit Log to track attendee and admin changes</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <EmailIcon
              className="featureIcon"
              color="primary"
              fontSize="large"
            ></EmailIcon>
            <p>Customizable confirmation emails for every attendee type</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <AttachMoneyIcon
              className="featureIcon"
              color="primary"
              fontSize="large"
            ></AttachMoneyIcon>
            <p>Tiered Pricing can be enforced on all fees</p>
          </div>
        </div>
        <div className="row featureIconRow">
          {" "}
          <div className="col m4 s12 featureIconCol">
            <PhotoLibraryIcon
              className="featureIcon"
              color="primary"
            ></PhotoLibraryIcon>
            <p>Unlimited pages & custom fields at no additional cost</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <TrendingUpIcon
              className="featureIcon"
              color="primary"
            ></TrendingUpIcon>
            <p>Real-Time Dashboard with customizable charts</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <EmojiSymbolsIcon
              className="featureIcon"
              color="primary"
            ></EmojiSymbolsIcon>
            <p>
              Promotional Codes/Discount Codes – every attendee can have a
              customized experience
            </p>
          </div>
        </div>
        <div className="row featureIconRow">
          {" "}
          <div className="col m4 s12 featureIconCol">
            <PeopleIcon className="featureIcon" color="primary"></PeopleIcon>
            <p>
              Guest registration – enforce a limit, or let them add unlimited
              guests and pay together
            </p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <EventNoteIcon
              className="featureIcon"
              color="primary"
            ></EventNoteIcon>
            <p>
              Add date and time conflict for Workshops and Sessions and enforce
              limits
            </p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <MenuIcon className="featureIcon" color="primary"></MenuIcon>
            <p>
              Unlimited demographics and custom fields: collect contact
              information, add drop-down selections, checkbox lists and custom
              fields
            </p>
          </div>
        </div>
        <div className="row featureIconRow">
          {" "}
          <div className="col m4 s12 featureIconCol">
            <TabletIcon className="featureIcon" color="primary"></TabletIcon>
            <p>Tickets/Product sales with limits, fees and wait listing</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <AllInboxIcon
              className="featureIcon"
              color="primary"
            ></AllInboxIcon>
            <p>
              Custom email blasts to keep attendees up to date on changes or
              information
            </p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <TranslateIcon
              className="featureIcon"
              color="primary"
            ></TranslateIcon>
            <p>
              All sites can be Multilingual by translating a .po file into any
              language
            </p>
          </div>
        </div>
        <div className="row featureIconRow">
          {" "}
          <div className="col m4 s12 featureIconCol">
            <CheckCircleIcon
              className="featureIcon"
              color="primary"
            ></CheckCircleIcon>
            <p>Onsite self-check-in application</p>
          </div>
          <div className="col m4 s12 featureIconCol">
            <ConfirmationNumberIcon
              className="featureIcon"
              color="primary"
            ></ConfirmationNumberIcon>
            <p>Create custom Badges/Tickets on any size stock</p>
          </div>
          <div className="col m4 s12">
            <AssessmentIcon
              className="featureIcon"
              color="primary"
            ></AssessmentIcon>
            <p>
              Use our Content Management System to create a custom brochure site
              for your event.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
