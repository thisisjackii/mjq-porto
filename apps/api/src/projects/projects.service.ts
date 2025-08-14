import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { read } from 'to-vfile';
import { matter } from 'vfile-matter';


const projectsJsonPath = path.join(process.cwd(), 'data', 'projects.json');
const projectsMdPath = path.join(process.cwd(), 'data', 'projects_md');

@Injectable()
export class ProjectsService {
    async findAll() {
        const data = await fs.readFile(projectsJsonPath, 'utf8');
        return JSON.parse(data);
    }

    async findOne(slug: string) {
        try {
            const filePath = path.join(projectsMdPath, `${slug}.mdx`);
            const file = await read(filePath, 'utf8');
            matter(file, { strip: true });

            return {
                metadata: file.data.matter,
                content: String(file)
            };
        } catch (error) {
            console.error(`Failed to read project file ${slug}:`, error);
            return null;
        }
    }
}