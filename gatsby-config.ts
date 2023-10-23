import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `4RTools - Official Website`,
    siteUrl: `https://www.4rtools.com.br`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-top-layout",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@theme": path.resolve(__dirname, "src/theme"),
          "@sections": path.resolve(__dirname, "src/sections"),
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `4rtools`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f47635`,
        theme_color: `#f47635`,
        display: `minimal-ui`,
        icon: `src/images/logo-4rtools.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YW4MC7XMVM", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};

export default config;
