const { checkSchema } = require("express-validator");

const validateCar = checkSchema(
  {
    name: { notEmpty: true, errorMessage: "name is required" },
    price: {
      isFloat: { options: { min: 0 } },
      errorMessage: "price need to be numberic",
    },
  },
  ["body"]
);

exports.validateCar = validateCar;
