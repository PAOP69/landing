import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* 
   * NOTA: 'output: export' ha sido desactivado porque entra en conflicto con las funciones de IA (Server Actions).
   * Para desplegar en GitHub Pages, recuerda que las funciones de IA no estarán disponibles.
   */
  // output: 'export', 
  
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
  
  /*
   * Si necesitas desplegar en una subruta de GitHub, descomenta la siguiente línea.
   * En Firebase Studio, dejarlo como '/' (o comentado) evita errores en el previsualizador.
   */
  // basePath: '/landing',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
