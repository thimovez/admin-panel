  import {forwardRef, Module} from '@nestjs/common';
import { PostsService } from './posts.service';
  import {PostsController} from "./posts.controller";
  import {SequelizeModule} from "@nestjs/sequelize";
  import {User} from "../users/users.model";
  import {Role} from "../roles/roles.model";
  import {UserRoles} from "../roles/user-roles-model";
  import {Post} from "./post.model";
  import {RolesModule} from "../roles/roles.module";
  import {AuthModule} from "../auth/auth.module";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Post]),
  ],
})
export class PostsModule {}
