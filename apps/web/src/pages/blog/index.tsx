import BlogCard from '@/components/BlogCard';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyState from '@/components/EmptyState';
import { getApiBaseUrl } from '@/lib/api';

export type Post = {
    slug: string;
    title: string;
    description: string;
    date: string;
};

type Props = {
    posts: Post[];
    error?: string;
};

export default function BlogPage({ posts, error }: Readonly<Props>) {
    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            {posts.length > 0 ? (
                <div className="space-y-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <EmptyState message="There are currently no blog posts to display. Please check back later!" />
            )}
        </div>
    );
}

export async function getStaticProps() {
    try {
        const res = await fetch(`${getApiBaseUrl()}/api/blog`);
        if (!res.ok) {
            return { props: { posts: [], error: `Failed to fetch posts.API status: ${res.status}.` } };
        }
        const posts = await res.json();
        return { props: { posts }, revalidate: 60 };
    } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        return { props: { posts: [], error: "Could not connect to the backend API." } };
    }
}