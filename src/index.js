const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./route/routes");
require("dotenv").config();
app.use(express.json());
app.use("/", route);

mongoose.set("strictQuery", false);

//____________________for development____________________________________

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("MongoDB is connected for development");
  })
  .catch((error) => {
    console.log("Not connected");
  });
app.listen(process.env.PORT || 8000, function () {
  console.log("Express app running on port" + " " +(process.env.port || 8000));
});

  //_________________________for local________________________

//   mongoose
//   .connect(
//     "mongodb+srv://nikita1:7CSKh9nBmgBm27YC@cluster0.suzof1p.mongodb.net/manualWheel",
//     {
//       useNewUrlParser: true,
//     }
//   )
//   .then(() => {
//     console.log("MongoDB is connected for local");
//   })
//   .catch((error) => {
//     console.log("Not connected");
//   });


// app.listen(process.env.PORT || 4000, function () {
//   console.log("Express app running on port" + " " +(process.env.port || 4000));
// });

