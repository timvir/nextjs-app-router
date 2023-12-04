import { remarkPlugin } from "@timvir/mdx";

export default {
  basePath: "/docs",

  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkPlugin],
          },
        },
      ],
    });

    return config;
  },
};
