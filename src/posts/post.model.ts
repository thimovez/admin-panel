import {Table, Model, Column, DataType, BelongsToMany, BelongsTo, ForeignKey} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles-model";
import {User} from "../users/users.model";

interface PostCreationAttributes {
    email: string;
    password: string;
}


@Table({tableName: "users"})
export class Post extends Model<Post, PostCreationAttributes>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING,  unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userID: number

    @BelongsTo(() => User)
    author: User
}
