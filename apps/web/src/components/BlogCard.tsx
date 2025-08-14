import Link from 'next/link';
import { Post } from '@/pages/blog';

type Props = {
    post: Post;
};

export default function BlogCard({ post }: Readonly<Props>) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <h3 className="text-2xl font-bold mt-2">{post.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>
                <div className="mt-4 text-blue-500 dark:text-blue-400 font-semibold">Read more →</div>
            </div>
        </Link>
    );
}