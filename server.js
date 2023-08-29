//Importing the express and creating the app=
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Enabling the read of env file
require("dotenv").config();
const userEmail = process.env.EMAIL_USER;
const userPassword = process.env.EMAIL_PASSWORD;

//Importing the cors, setting the option, using the cors
const cors = require("cors");
const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("The http is not allowed to interact with server"));
    }
  },
};
app.use(cors(corsOptions));

//Imporing nodemailer and creating the transporter
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log("Transporter verification failed:", error);
  } else {
    console.log("Transporter is ready to send emails");
  }
});

//Import the validation function
const validateReqBody=require('./validation')

//Starting the server
app.listen(5000, () => {
  console.log("listening to port 5000");
});

//Handling the post request
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, topic, message } = req.body;
  const mailOptions = {
    from: `${firstName} ${lastName} <${email}>`,
    to: "brandonrafael80@gmail.com",
    subject: topic,
    text: message,
  };
  const problems=validateReqBody(req.body)
  if(problems.length>0){
    return res.json({'status':'Error',message:problems})
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Sending error:", error);
      res.json({ status: "Error", message: ["Something went wrong"] });
    } else {
      console.log("Sending succeed:", info.response);
      res.json({
        status: "Success",
        message: ["Message has been sent to my mail!"],
      });
    }
  });
});
