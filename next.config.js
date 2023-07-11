module.exports = {
  webpack: (config, { dev }) => {
    // Add support for JSX files
    config.module.rules.push({
      test: /\.jsx?$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"],
        },
      },
    });

    return config;
  },
};
