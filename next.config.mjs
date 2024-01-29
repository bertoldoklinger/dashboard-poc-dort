/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/geral',
        permanent: false,
      },
    ]
  }
}

export default nextConfig
