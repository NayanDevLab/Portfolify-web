import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        nodeMiddleware: false,
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
