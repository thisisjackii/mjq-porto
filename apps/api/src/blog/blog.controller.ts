import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Get()
    findAll() {
        return this.blogService.findAll();
    }

    @Get(':slug')
    async findOne(@Param('slug') slug: string) {
        const post = await this.blogService.findOne(slug);
        if (!post) {
            throw new NotFoundException(`Blog post with slug '${slug}' not found`);
        }
        return post;
    }
}