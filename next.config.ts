import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    devIndicators: false,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**.media.strapiapp.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/**',
        }]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);