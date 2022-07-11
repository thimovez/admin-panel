import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @IsString({message: "Должна быть строка"})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;
    @IsString({message: "Должна быть строка"})
    @Length(4, 14, {message: "Не меньше 4 и не больше 14 символов"})
    readonly password: string;
}