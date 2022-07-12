import {Body, Controller, Post, UploadedFile} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Post()
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        this.postService.create(dto, image);
    }

}
