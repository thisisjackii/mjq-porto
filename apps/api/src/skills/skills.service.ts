import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

const skillsJsonPath = path.join(process.cwd(), 'data', 'skills.json');

@Injectable()
export class SkillsService {
    async findAll() {
        const data = await fs.readFile(skillsJsonPath, 'utf8');
        return JSON.parse(data);
    }
}