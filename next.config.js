/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
        spotify: {
            baseUrl: process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL,
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
        },
        test: 'hatdawg'
    }
}
module.exports = nextConfig
