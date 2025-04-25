import express from "express";

const router = express.Router();

const cars = [
  {
    id: 1,
    brand: "Lexus",
    model: "LX570",
  },
  {
    id: 2,
    brand: "BMW",
    model: "750",
  },
  {
    id: 3,
    brand: "Mercedes",
    model: "C180",
  },
];

router.get("/", (req, res) => {
  res.json({ message: "All cars returned succesfully!", data: cars });
});

router.get("/car/:id", (req, res) => {
  const { id } = req.params;
  const car = cars.find((car) => car.id === parseInt(id));
  res.json({ message: `Car with id ${id} returned succesfully!`, data: car });
});

router.post("/add", (req, res) => {
  const car = req.body;
  cars.push(car);
  res.json({ message: "New car added successfully" });
});

router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const newCar = req.body;
  const car = cars.find((car) => car.id === parseInt(id));

  car.brand = newCar.brand;
  car.model = newCar.model;

  res.json({ message: `Car with id ${id} updated succesfully!` });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const car = cars.findIndex((car) => car.id === parseInt(id));

  cars.splice(car, 1);

  res.json({ message: `Car with id ${id} deleted successfully!` });
});

export default router;
