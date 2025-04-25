import express from 'express'
import carsRoute from "./routes/cars.route.js";
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())
app.use("/api/v1/cars", carsRoute);

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});