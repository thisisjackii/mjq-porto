import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getApiBaseUrl } from '@/lib/api';

type Props = {
    source: MDXRemoteSerializeResult;
    frontmatter: { [key: string]: any };
};

export default function BlogPostPage({ source, frontmatter }: Readonly<Props>) {
    return (
        <article className="prose dark:prose-invert max-w-none">
            <h1>{frontmatter.title}</h1>
            <p className="text-gray-500 dark:text-gray-400">
                Published on {new Date(frontmatter.date).toLocaleDateString()}
            </p>
            <MDXRemote {...source} />
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${getApiBaseUrl()}/api/blog`);
    const posts = await res.json();
    const paths = posts.map((p: { slug: string }) => ({
        params: { slug: p.slug },
    }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${getApiBaseUrl()}/api/blog/${params?.slug}`);
    if (!res.ok) {
        return { notFound: true };
    }
    const post = await res.json();
    const mdxSource = await serialize(post.content);
    return {
        props: {
            source: mdxSource,
            frontmatter: post.metadata,
        },
        revalidate: 60,
    };
};