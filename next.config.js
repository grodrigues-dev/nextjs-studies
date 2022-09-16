/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [{
      source: '/dashboard',
      destination: '/pokemons',
      permanent: false
    }]
  }
}

module.exports = nextConfig
