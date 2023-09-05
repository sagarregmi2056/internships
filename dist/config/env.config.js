"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(process.cwd(), ".env"),
});
class EnvConfiguration {
}
EnvConfiguration.PORT = process.env.PORT;
EnvConfiguration.DB_NAME = process.env.DB_NAME;
EnvConfiguration.DB_HOST = process.env.DB_HOST;
EnvConfiguration.DB_PASSWORD = process.env.DB_PASSWORD;
EnvConfiguration.DB_PORT = process.env.DB_PORT || 5432;
EnvConfiguration.DB_USERNAME = process.env.DB_USERNAME;
exports.default = EnvConfiguration;
