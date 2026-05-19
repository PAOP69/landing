import type {NextConfig} from 'next';

const isExport = process.env.NEXT_PUBLIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  /* 
   * Modo dinámico:
   * Si ejecutamos 'npm run export', se activa el modo estático y la subruta.
   * En desarrollo (Firebase Studio), funciona de forma estándar para evitar errores.
   */
  output: isExport ? 'export' : undefined,
  basePath: isExport ? '/landing' : '',
  
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
