import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/Footer-eecbddd3.mjs": {
    "type": "application/javascript",
    "etag": "\"545-1D9WYkVfH4fxbcJPqoSUaRq5F6w\"",
    "mtime": "2022-01-19T13:01:11.472Z",
    "path": "../public/_nuxt/Footer-eecbddd3.mjs"
  },
  "/_nuxt/Header-8ee81b0c.mjs": {
    "type": "application/javascript",
    "etag": "\"87b-zZqWDBEMUS7dTKO9KA6RypYdcs8\"",
    "mtime": "2022-01-19T13:01:11.472Z",
    "path": "../public/_nuxt/Header-8ee81b0c.mjs"
  },
  "/_nuxt/about-274146b4.mjs": {
    "type": "application/javascript",
    "etag": "\"97a-eKoheuiV4N4tv04giMwigUdTuKw\"",
    "mtime": "2022-01-19T13:01:11.472Z",
    "path": "../public/_nuxt/about-274146b4.mjs"
  },
  "/_nuxt/bootstrap-23b30145.mjs": {
    "type": "application/javascript",
    "etag": "\"1a546-Qv2hBfoHrFgT6uQ0g+UlzOnXmlw\"",
    "mtime": "2022-01-19T13:01:11.471Z",
    "path": "../public/_nuxt/bootstrap-23b30145.mjs"
  },
  "/_nuxt/default-d48c6939.mjs": {
    "type": "application/javascript",
    "etag": "\"1a6-GKWbA56APoydAMNChQkHXo114OU\"",
    "mtime": "2022-01-19T13:01:11.470Z",
    "path": "../public/_nuxt/default-d48c6939.mjs"
  },
  "/_nuxt/entry-df8de034.mjs": {
    "type": "application/javascript",
    "etag": "\"65-Bm6TQECgnQOeJMNi8ohly/rRroE\"",
    "mtime": "2022-01-19T13:01:11.470Z",
    "path": "../public/_nuxt/entry-df8de034.mjs"
  },
  "/_nuxt/index-2b642d5b.mjs": {
    "type": "application/javascript",
    "etag": "\"170a4-l1W3nty0lVafE61b6YmUEzt5V+c\"",
    "mtime": "2022-01-19T13:01:11.470Z",
    "path": "../public/_nuxt/index-2b642d5b.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"89e-an8CGyBnEdRlDq8b5WXEfwBxDiM\"",
    "mtime": "2022-01-19T13:01:11.469Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/paginate-f3790cd9.mjs": {
    "type": "application/javascript",
    "etag": "\"9d-t58vEASFSnRSzDWt3cEQ8Vt6NvA\"",
    "mtime": "2022-01-19T13:01:11.469Z",
    "path": "../public/_nuxt/paginate-f3790cd9.mjs"
  },
  "/_nuxt/product-40b8c32e.mjs": {
    "type": "application/javascript",
    "etag": "\"b1-y2ItYnhVC7pkzpM9L7ZWn2wdy3g\"",
    "mtime": "2022-01-19T13:01:11.469Z",
    "path": "../public/_nuxt/product-40b8c32e.mjs"
  },
  "/_nuxt/project-faf4a352.mjs": {
    "type": "application/javascript",
    "etag": "\"b1-z5u+YyetIokEkC8q6w7ATcu2Lu0\"",
    "mtime": "2022-01-19T13:01:11.468Z",
    "path": "../public/_nuxt/project-faf4a352.mjs"
  },
  "/_nuxt/assets/bootstrap.e54d22c8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2078-MjgnnQyNUgnpAIhg2vgsJgP1UAE\"",
    "mtime": "2022-01-19T13:01:11.471Z",
    "path": "../public/_nuxt/assets/bootstrap.e54d22c8.css"
  },
  "/_nuxt/assets/index.f9d6e5b1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b9c-tE5ekim7304QDqYBCIxHWdgi8Ak\"",
    "mtime": "2022-01-19T13:01:11.471Z",
    "path": "../public/_nuxt/assets/index.f9d6e5b1.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/ahmadrifqib/Developer/mpi/dist" + "/" + "1642597269";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
