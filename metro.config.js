const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("md", "mdx", "css");

config.transformer.babelTransformerPath = require.resolve("./transformer.js");

module.exports = config;