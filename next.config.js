/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // assetPrefix: 'https://techparty.faccat.br/2023/',
    trailingSlash: true,
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js'
    },
    webpack: (config, { isServer }) => {
        config.resolve.alias.canvas = false;

        return config;
    }
}

module.exports = nextConfig
