/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: 'https://techparty.faccat.br/2023/',
    trailingSlash: true,
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js'
    },
}

module.exports = nextConfig
