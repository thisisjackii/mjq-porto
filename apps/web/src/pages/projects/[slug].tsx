import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getApiBaseUrl } from '@/lib/api';

type Props = {
    source: MDXRemoteSerializeResult;
    frontmatter: { [key: string]: any };
};

export default function ProjectDetailsPage({ source, frontmatter }: Readonly<Props>) {
    return (
        <article className="prose dark:prose-invert max-w-none">
            <h1>{frontmatter.title}</h1>
            <MDXRemote {...source} />
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${getApiBaseUrl()}/api/projects`);
    const projects = await res.json();
    const paths = projects.map((p: { slug: string }) => ({
        params: { slug: p.slug },
    }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`/ api / projects / ${params?.slug}`);
    if (!res.ok) {
        return { notFound: true };
    }
    const project = await res.json();
    const mdxSource = await serialize(project.content);
    return {
        props: {
            source: mdxSource,
            frontmatter: project.metadata,
        },
        revalidate: 60,
    };
};