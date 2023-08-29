import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

export default class EnvConfiguration {
  static PORT = process.env.PORT;
  static DB_NAME = process.env.DB_NAME;
  static DB_HOST = process.env.DB_HOST;
  static DB_PASSWORD = process.env.DB_PASSWORD;
  static DB_PORT = process.env.DB_PORT || 5432;
  static DB_USERNAME = process.env.DB_USERNAME;
}