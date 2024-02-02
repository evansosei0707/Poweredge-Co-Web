/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: ['cdn.sanity.io']
    }
}
module.exports = nextConfig
