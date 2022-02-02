const express = require("express");
const { model } = require("mongoose");
const { signup } = require("../controller/auth");
const router = express.Router();

router.post("/signup", signup);

router.post("/sigin", (req, res) => {});

module.exports = router;
