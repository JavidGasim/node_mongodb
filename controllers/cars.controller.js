import {Car} from "../models/cars.model.js";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({ message: "All cars returned succesfully!", data: cars });
  } catch (error) {
    res.status(500).json({ message: "Error getting cars", error });
  }
};

export const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: `Car with id ${id} returned succesfully!`, data: car });
  } catch (error) {
    res.status(500).json({ message: "Error getting car", error });
  }
};

export const createCar = async (req, res) => {
  try {
    const { brand, model } = req.body;
    const newCar = new Car({ brand, model });
    await newCar.save();
    res.status(201).json({ message: "Car created successfully", data: newCar });
  } catch (error) {
    res.status(500).json({ message: "Error creating car", error });
  }
};  

export const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { brand, model } = req.body;
    const updatedCar = await Car.findByIdAndUpdate(id, { brand, model }, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: `Car with id ${id} updated succesfully!`, data: updatedCar });
  } catch (error) {
    res.status(500).json({ message: "Error updating car", error });
  }
};  

export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await Car.findByIdAndDelete(id);
    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: `Car with id ${id} deleted succesfully!`, data: deletedCar });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car", error });
  }
};
