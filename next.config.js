/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;