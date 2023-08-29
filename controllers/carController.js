const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const Car = require("../models/carModel");

exports.findAll = async (req, res, next) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.findById = async (req, res, next) => {
  try {
    if (mongoose.isValidObjectId(req.params?.id)) {
      const car = await Car.findById(req.params?.id);
      if (!car) {
        res.status(404).json({ message: "Car not found" });
      } else {
        res.json(car);
      }
    } else {
      res.status(400).json({ message: "Invalid id parameter" });
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
      imageUrl: req.body?.imageUrl,
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
    if (mongoose.isValidObjectId(req.params?.id)) {
      const updatedCar = await Car.findByIdAndUpdate(req.params?.id, req.body, {
        new: true,
      });
      if (updatedCar) {
        res.json(updatedCar);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } else {
      res.status(400).json({ message: "Invalid id parameter" });
    }
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
