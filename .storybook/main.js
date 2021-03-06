module.exports = {
  stories: ['../storybook/*.story.tsx'],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.md?$/,
        loader: "markdown-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          // Optional
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
