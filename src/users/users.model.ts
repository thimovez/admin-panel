import {Table, Model, Column, DataType, BelongsToMany, HasMany} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles-model";
import {Post} from "../posts/post.model";

interface UserCreationAttributes {
    email: string;
    password: string;
}


@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttributes>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING,  unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, unique: true,  allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];
}
