/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "epic.gsfc.nasa.gov",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
