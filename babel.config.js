module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@app": "./src/app",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@routes": "./src/routes",
            "@utils": "./src/utils",
            "@api": "./src/app/api",
            "@auth": "./src/app/auth",
            "@services": "./src/app/services",
            "@shared": "./src/app/shared",
            "@themes": "./src/themes",
            "@contexts": "./src/contexts",
            "@hooks": "./src/hooks",
            "@store": "./src/store",
          },
        },
      ],
    ],
  };
};
