import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Get()
    findAll() {
        return this.projectsService.findAll();
    }

    @Get(':slug')
    async findOne(@Param('slug') slug: string) {
        const project = await this.projectsService.findOne(slug);
        if (!project) {
            throw new NotFoundException(`Project with slug '${slug}' not found`);
        }
        return project;
    }
}