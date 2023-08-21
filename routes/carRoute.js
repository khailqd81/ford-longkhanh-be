var express = require("express");
var router = express.Router();
var carController = require("../controllers/carController");
const { validateCar } = require("../middlewares/validator");
const { checkSchema } = require("express-validator");

router.get("/", carController.findAll);
router.get("/:id", carController.findById);
router.post("/", validateCar, carController.add);
// checkSchema({
//     name: { notEmpty: true, errorMessage: "name is required" },
//   })
router.patch("/:id", carController.update);
router.delete("/:id", carController.delete);

module.exports = router;
