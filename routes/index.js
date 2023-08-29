var express = require("express");
var router = express.Router();

var userRoute = require("./userRoute");
var carRoute = require("./carRoute");

router.use("/users", userRoute);
router.use("/cars", carRoute);

module.exports = router;
