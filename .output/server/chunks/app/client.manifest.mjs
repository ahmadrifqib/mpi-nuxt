const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-33acfcfa.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "_bootstrap-5dcd9ffd.mjs": {
    "file": "bootstrap-5dcd9ffd.mjs",
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
      "assets/bootstrap.08cd957b.css"
    ]
  },
  "components/Footer.vue": {
    "file": "Footer-b98d8918.mjs",
    "src": "components/Footer.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "components/Header.vue": {
    "file": "Header-2706ccd8.mjs",
    "src": "components/Header.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "pages/about.vue": {
    "file": "about-ed08082f.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-418e2b24.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "pages/product.vue": {
    "file": "product-958f8496.mjs",
    "src": "pages/product.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "pages/project.vue": {
    "file": "project-60e75bc1.mjs",
    "src": "pages/project.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5dcd9ffd.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-62dfba33.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Header.vue",
      "components/Footer.vue",
      "_bootstrap-5dcd9ffd.mjs"
    ]
  }
};

export { client_manifest as default };
