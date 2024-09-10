/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    output: 'export',
    staticPageGenerationTimeout: 300,
    async headers(){
        return [{
            source:"/:all*",
            headers: [
                {
                    key: "Content-Security-Policy",
                    value: `
                        default-src 'self' https://api.axept.io https://netbuddies.be;
                        style-src 'self' 'unsafe-inline' fonts.googleapis.com;
                        base-uri 'none';
                        form-action 'self';
                        script-src 'self' https://matomo.alexianmoins.be https://client.axept.io https://static.axept.io 'unsafe-inline' 'unsafe-eval';
                        font-src 'self' fonts.gstatic.com;
                        manifest-src 'self';
                        img-src 'self' blob: data: https://strapi.netbuddies.be https://ik.imagekit.io;
                        connect-src 'self' https://matomo.alexianmoins.be https://api.axept.io https://netbuddies.be https://client.axept.io;
                    `.replace(/\s{2,}/g, ' ').trim()
                }
            ]
        }]
    },
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
