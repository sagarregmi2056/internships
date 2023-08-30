import express, { Request, Response } from "express";
import EnvConfiguration from "./config/env.config";
import AppDataSource from "./config/database.config";
import UserService from "./services/user/user.service";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "App" });
});

app.post("/add-user", (req, res) => {
  const userService = new UserService();
  userService.insertUser();
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(EnvConfiguration.PORT, () => {
      console.log("Server has started 🚀 ");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });