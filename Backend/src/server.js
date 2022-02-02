const express = require("express");
const env = require("dotenv");
const app = express(); //creating app
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const authRoutes = require("./routes/auth");

//environment varibale
env.config();

//mongodb connection
//mongodb+srv://Peshal:<password>@agroweb.ibf2p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb+srv://Peshal:admin@agroweb.ibf2p.mongodb.net/agroecommerce?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database is connected");
  });

app.use(express.json()); //Sending JSON data to API
//middleware
app.use("/api", authRoutes); //prefixing every api

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
