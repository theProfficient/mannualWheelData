const mongoose = require("mongoose");
const userModel = require("../model/userModel");

const createDataOfUser = async function (req, res) {
  try {
    let storeData = req.query;
    let { userId, balance } = storeData;

    if (Object.keys(storeData).length == 0) {
      return res.status(400).send({
        status: false,
        message:
          "Body should  not be Empty please enter some data to store user",
      });
    }

    if (userId === null || userId === undefined) {
      return res.status(400).send({
        status: false,
        message: "userId is required to store data",
      });
    }

    let checkUserId = await userModel.findOne({userId:userId})
    if(checkUserId && balance){
    let updateUser = await userModel.findOneAndUpdate({userId:userId},
      {balance:balance},
      {new:true}
      )
    return res.status(200).send({
      status: true,
      message: "succesfully updated",
      data: updateUser,
    });
    } 
    const userCreated = await userModel.create(storeData);

    return res.status(201).send({
      status: true,
      message: "success",
      data: userCreated,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

//__________________________________get user_______________________________

const getDataOfUser = async function (req, res) {
  try {
    let userId = req.query.userId;


    let checkUser = await userModel.findOne({ userId: userId });
    if (!checkUser) {
      return res.status(400).send({
        status: false,
        message: "user not found",
      });
    }

    res.status(200).json({balance:checkUser.balance});

  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

module.exports = { createDataOfUser, getDataOfUser };
