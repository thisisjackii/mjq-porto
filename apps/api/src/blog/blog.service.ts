import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { read } from 'to-vfile';
import { matter } from 'vfile-matter';

const blogMdPath = path.join(process.cwd(), 'data', 'blog_md');

export interface Post {
    slug: string;
    date: string;
    [key: string]: any;
}

@Injectable()
export class BlogService {
    async findAll(): Promise<Post[]> {
        const files = await fs.readdir(blogMdPath);

        const posts: Post[] = await Promise.all(
            files.map(async (filename) => {
                const filePath = path.join(blogMdPath, filename);
                const file = await read(filePath, 'utf-8');
                matter(file, { strip: true });

                return {
                    slug: filename.replace(/\.mdx$/, ''),
                    ...(typeof file.data.matter === 'object' && file.data.matter !== null ? file.data.matter : {}),
                } as Post;
            }),
        );

        return posts.sort((a, b) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0;
            const dateB = b.date ? new Date(b.date).getTime() : 0;
            return dateB - dateA;
        });
    }

    async findOne(slug: string) {
        try {
            const filePath = path.join(blogMdPath, `${slug}.mdx`);
            const file = await read(filePath, 'utf-8');
            matter(file, { strip: true });

            return {
                metadata: file.data.matter,
                content: String(file)
            };
        } catch (error) {
            console.error(`Failed to read blog post ${slug}:`, error);
            return null;
        }
    }
}