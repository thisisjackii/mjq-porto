const withMDX = require('@next/mdx')({
    extension: /.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],


    },
});
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
};
module.exports = withMDX(nextConfig);