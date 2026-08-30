const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    cssnano: { preset: ["advanced", { discardComments: { removeAll: true } }] },
  },
};

export default config;
