import {Table, Model, Column, DataType, BelongsToMany} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles-model";

interface RoleCreationAttributes {
    value: string;
    description: string;
}


@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreationAttributes>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING,  unique: true, allowNull: false})
    value: string;

    @Column({type: DataType.STRING, unique: true,  allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
