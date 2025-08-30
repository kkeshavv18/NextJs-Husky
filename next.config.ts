import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['*/'], // Run ESLint across the entire project
  },
};

export default nextConfig;
