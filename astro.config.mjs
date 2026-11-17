//

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

const SERVER_PORT = 3000; // the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://rogcmd.github.io"; // url after deploy
const REPO = isBuild ? "/astro-template" : ""; // github Repository
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  base: REPO,
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--display",
      styles: ["normal"],
      weights: ["400"],
      fallbacks: ["system-ui"],
    },
    {
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--text",
      styles: ["normal"],
      weights: ["400"],
      fallbacks: ["system-ui"],
    },
  ],
});
