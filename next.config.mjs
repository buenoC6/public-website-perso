/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    output: 'export',
    staticPageGenerationTimeout: 300,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/fr/',
                permanent: false,
            },
        ]
    }
};

export default nextConfig;
