const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-f0a959c6.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "_bootstrap-b86616fd.mjs": {
    "file": "bootstrap-b86616fd.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "pages/about.vue",
      "pages/index.vue",
      "pages/product.vue",
      "pages/project.vue",
      "components/Footer.vue",
      "components/Header.vue"
    ],
    "css": [
      "assets/bootstrap.03e90eef.css"
    ]
  },
  "components/Footer.vue": {
    "file": "Footer-a5be2351.mjs",
    "src": "components/Footer.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "components/Header.vue": {
    "file": "Header-32924e6a.mjs",
    "src": "components/Header.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "pages/about.vue": {
    "file": "about-5653a36c.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-d47e6df0.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "pages/product.vue": {
    "file": "product-8ec76cce.mjs",
    "src": "pages/product.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "pages/project.vue": {
    "file": "project-22ed2ab5.mjs",
    "src": "pages/project.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b86616fd.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-b1b2b675.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Header.vue",
      "components/Footer.vue",
      "_bootstrap-b86616fd.mjs"
    ]
  }
};

export { client_manifest as default };
