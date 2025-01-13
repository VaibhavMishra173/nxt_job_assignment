import express, { Application } from "express";
import dotenv from "dotenv";
import jobRoutes from "./routes/job.routes";
import sequelize from "./config/database";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use("/api", jobRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
});

export default app;
