
/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: undefined,  // Uncomment the following line only for building purposes. By default, this line should remain commented out.
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
	assetPrefix : "",
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
