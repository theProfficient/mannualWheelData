const express = require("express");
const Router = express.Router();

const controller  = require("../controller/userController.js")

Router.get("/createData", controller.createDataOfUser);
Router.get("/getData", controller.getDataOfUser);



Router.all("/**", function (req, res) {
    res.status(404).send({
      status: false,
      message: "Make Sure Your Endpoint is Correct or Not!",
    });
  });
  
  module.exports = Router;