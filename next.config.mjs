/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['localhost', 'https://mrandmrskids-git-main-shagamalla-3924s-projects.vercel.app']
  },
}

export default nextConfig
