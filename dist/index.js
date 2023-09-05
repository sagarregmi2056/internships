"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_config_1 = __importDefault(require("./config/env.config"));
const database_config_1 = __importDefault(require("./config/database.config"));
const user_service_1 = __importDefault(require("./services/user/user.service"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({ message: "App" });
});
app.post("/add-user", (req, res) => {
    const userService = new user_service_1.default();
    userService.insertUser();
});
database_config_1.default.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(env_config_1.default.PORT, () => {
        console.log("Server has started 🚀 ");
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
