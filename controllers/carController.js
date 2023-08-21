const { validationResult } = require("express-validator");
const Car = require("../models/carModel");

exports.findAll = async (req, res, next) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.findById = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params?.id);
    if (!car) {
      res.status(404).json({ message: "Car not found" });
    } else {
      res.json(car);
    }
  } catch (error) {
    console.log("===> error function findById in carController: ", error);
    res.status(400).json({ message: error.message });
  }
};

exports.add = async (req, res, next) => {
  const result = validationResult(req);
  console.log("result: ", result);
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }
  try {
    const car = new Car({
      name: req.body?.name,
      price: req.body?.price,
      type: req.body?.type,
      numberSeat: req.body?.numberSeat,
      fuelType: req.body?.fuelType,
    });
    const newCar = await car.save();
    res.json(newCar);
  } catch (error) {
    console.log("===> error function add in carController: ", error);
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    res.json(updatedCar);
  } catch (error) {
    console.log("===> error function update in carController: ", error);
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const cars = await Car.findByIdAndDelete(req.params?.id);
    res.json({ success: true });
  } catch (error) {
    console.log("===> error function delete in carController: ", error);
    res.status(400).json({ message: error.message });
  }
};
