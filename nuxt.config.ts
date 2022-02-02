import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Mixa Perkasa Indonesia",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "author", content: "PT Mixa Perkasa Indonesia" },
            { name: "keywords", content: "Mixa Beton, Mixa Paving, Beton, Paving" },
            { name: "description", content: "PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton. " },
            //Open Graph Protocol
            { property: "og:title", content: "PT Mixa Perkasa Indonesia" },
            { property: "og:site_name", content: "PT Mixa Perkasa Indonesia" },
            { property: "og:description", content: "PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton. " },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "https://mixaperkasa.vercel.app/" },
            //Twitter Property
            { name: "twitter:card", content: "summary" },
            { name: "twitter:title", content: "PT Mixa Perkasa Indonesia" },
            { name: "twitter:description", content: "PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton. " }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "assets/favicon.ico" }
        ],
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    // 'tailwindcss/nesting': {},
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    },  
    css: [
        '@/assets/main.css',
    ],
})
