const plugins = [
  [
    "import",
    {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true
    },
    "vant"
  ]
];

module.exports = {
  plugins,
  presets: ["@vue/app"]
};
