const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); //for hashing our pass
//creting schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: "String",
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  userName: {
    type: "String",
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: "String",
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: "String",
    required: true,
  },
  role: {
    type: "String",
    enum: ["user", "admin"],
    default: "user",
  },
  contact: {
    type: "String",
  },
  profile: {
    type: "String",
  },
  //timestamps: true,
});
//virtual fields
userSchema.virtual("pass").set(function (pass) {
  this.password = bcrypt.hashSync(pass, 10);
});

//methods
userSchema.methods = {
  authenticate: function () {
    return becrypt.comapreSync(pass, this.password);
  },
};

module.exports = mongoose.model("User", userSchema);
