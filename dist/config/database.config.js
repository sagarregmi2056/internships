"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const env_config_1 = __importDefault(require("./env.config"));
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: env_config_1.default.DB_HOST,
    port: +env_config_1.default.DB_PORT,
    username: env_config_1.default.DB_USERNAME,
    password: env_config_1.default.DB_PASSWORD,
    database: env_config_1.default.DB_NAME,
    entities: [process.cwd() + "/src/entities/**/*.ts"],
    synchronize: true,
});
exports.default = AppDataSource;
