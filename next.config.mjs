/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // process: require.resolve("process/browser"),
      // zlib: require.resolve("browserify-zlib"),
      // os: require.resolve("os-browserify/browser"),
      // stream: require.resolve("stream-browserify"),
      // util: require.resolve("util"),
      // buffer: require.resolve("buffer"),
      // asset: require.resolve("assert"),
      // crypto: require.resolve("crypto-browserify"),
      // http: require.resolve("stream-http"),
      // https: require.resolve("https-browserify"),
      // path: require.resolve("path-browserify"),
      fs: false,
    };

    /**
     * Suppresses warnings from weird crypto libraries.
     * Ideally, we should be fixing these but I'm
     * counting these as tech-debt for now.
     *
     * Refer to: https://webpack.js.org/configuration/other-options/#ignorewarnings
     */
    config.ignoreWarnings = [
      { message: /Module not found/ },
      { message: /Critical dependency/ },
      { message: /bigint: Failed to load bindings/ },
      { message: /punycode/ },
    ];

    /**
     * This part allows usage of SVGR on Next.js
     * Refer to: https://react-svgr.com/docs/next/#usage
     */
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: true, removeViewBox: false },
        },
      ], // important
    });

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "placehold.co",
    //   },
    // ],
    // dangerouslyAllowSVG: true,
    // contentDispositionType: "attachment",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
