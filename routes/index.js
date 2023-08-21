var express = require("express");
var router = express.Router();
var userRoute = require("./userRoute");
var carRoute = require("./carRoute");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use("/users", userRoute);
router.use("/cars", carRoute);

module.exports = router;
