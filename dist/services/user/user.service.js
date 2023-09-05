"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_1 = __importDefault(require("../../config/database.config"));
const user_entity_1 = __importDefault(require("../../entities/user/user.entity"));
class UserService {
    // user Table. (data)
    // table refernce.
    constructor(userEntity = database_config_1.default.getRepository(user_entity_1.default)) {
        this.userEntity = userEntity;
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.userEntity.find();
            console.log("data", data);
        });
    }
    insertUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_entity_1.default();
            user.firstName = "Saga";
            user.lastName = "Dahal";
            user.isActive = true;
            const d = yield this.userEntity.save(user);
            console.log("d", d);
        });
    }
}
exports.default = UserService;
