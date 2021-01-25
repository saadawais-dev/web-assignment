const express = require("express");
const con = require("../routes/contactus");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/contactus", con);
};
