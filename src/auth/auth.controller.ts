import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post("/login")
    login(@Body() UserDto: CreateUserDto) {
        return this.authService.login(UserDto)
    }

    @Post("/registration")
    registration(@Body() UserDto: CreateUserDto) {
        return this.authService.registration(UserDto)
    }


}
