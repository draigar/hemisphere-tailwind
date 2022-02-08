module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./pages'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@web': './src/',
        },
      },
    ],

  ],
};
