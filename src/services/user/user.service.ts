import AppDataSource from "../../config/database.config";
import UserEntity from "../../entities/user/user.entity";

export default class UserService {
  // user Table. (data)
  // table refernce.

  constructor(
    private readonly userEntity = AppDataSource.getRepository(UserEntity)
  ) {}

  async getUser() {
    const data = await this.userEntity.find();
    console.log("data", data);
  }

  async insertUser() {
    const user = new UserEntity();
    user.firstName = "Saga";
    user.lastName = "Dahal";
    user.isActive = true;

    const d = await this.userEntity.save(user);
    console.log("d", d);
  }
}