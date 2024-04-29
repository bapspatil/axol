import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), sitemap(), partytown()],
  output: "server",
  adapter: cloudflare(),
  // vite: {
  //   define: {
  //     'process.env.CLOUDFLARE_TURNSTILE_SITEKEY': JSON.stringify(process.env.CLOUDFLARE_TURNSTILE_SITEKEY)
  //   }
  // }
});