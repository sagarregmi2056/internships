import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}

export default UserEntity;