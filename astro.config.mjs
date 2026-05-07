import { defineConfig, passthroughImageService } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import partytown from "@astrojs/partytown"
import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap(), partytown()],
  output: "server",
  adapter: cloudflare(),
  site: "https://axol.io",
  prefetch: {
    prefetchAll: true,
  },
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
