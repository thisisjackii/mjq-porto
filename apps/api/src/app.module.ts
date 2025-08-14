import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { BlogModule } from './blog/blog.module';
import { SkillsModule } from './skills/skills.module';
import { ContactModule } from './contact/contact.module';

@Module({
    imports: [ProjectsModule, BlogModule, SkillsModule, ContactModule],
    controllers: [],
    providers: [],
})
export class AppModule { }