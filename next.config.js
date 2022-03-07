module.exports = {
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  // reactStrictMode: true,
};
