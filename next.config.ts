import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática para GitHub Pages
  trailingSlash: true, // Recomendado para evitar errores 404 en subrutas al recargar en GitHub Pages
  images: {
    unoptimized: true, // Requerido ya que GitHub Pages no tiene servidor de optimización de imágenes
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
  // IMPORTANTE: Si tu sitio NO está en el dominio raíz (ej. usuario.github.io/mi-proyecto/),
  // debes descomentar la siguiente línea y poner el nombre de tu repositorio:
  // basePath: '/mi-proyecto',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
