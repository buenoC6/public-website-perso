/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    output: 'export',
    staticPageGenerationTimeout: 300,
    async headers(){
        return [{
            source:"/:all*",
            headers:[{
                key:"content-security-policy",
                value:"" +
                    "default-src 'self' data: ;" +
                    " style-src 'self' 'unsafe-inline' fonts.googleapis.com;" +
                    " base-uri 'none';" +
                    " form-action 'self';" +
                    " script-src 'self' 'unsafe-eval' 'unsafe-inline';" +
                    " font-src 'self' fonts.gstatic.com;" +
                    " manifest-src 'self';" +
                    " img-src 'self' blob: " +
                    " https://strapi.netbuddies.be" +
                    " data:" +
                    " https://ik.imagekit.io" +
                    " connect-src 'self' https://matomo.alexianmoins.be;"
            }]
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
