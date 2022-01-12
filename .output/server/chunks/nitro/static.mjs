import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/Footer-a5be2351.mjs": {
    "type": "application/javascript",
    "etag": "\"4fe-pFlWW6gL5VReVyv45UwyN1od3Qo\"",
    "mtime": "2022-01-12T09:52:34.489Z",
    "path": "../public/_nuxt/Footer-a5be2351.mjs"
  },
  "/_nuxt/Header-32924e6a.mjs": {
    "type": "application/javascript",
    "etag": "\"324-u2OaaelVsyomA5nCilAXWtpnLrc\"",
    "mtime": "2022-01-12T09:52:34.489Z",
    "path": "../public/_nuxt/Header-32924e6a.mjs"
  },
  "/_nuxt/about-5653a36c.mjs": {
    "type": "application/javascript",
    "etag": "\"902-2xbjhBk4tVIcLWQG881Yvj0i0rM\"",
    "mtime": "2022-01-12T09:52:34.488Z",
    "path": "../public/_nuxt/about-5653a36c.mjs"
  },
  "/_nuxt/bootstrap-b86616fd.mjs": {
    "type": "application/javascript",
    "etag": "\"1a418-s938+Zq6aJ6gL2sglWcMd/JglGI\"",
    "mtime": "2022-01-12T09:52:34.487Z",
    "path": "../public/_nuxt/bootstrap-b86616fd.mjs"
  },
  "/_nuxt/default-b1b2b675.mjs": {
    "type": "application/javascript",
    "etag": "\"184-fYAB1kya7bkjFwr/Odk2kNxkNdQ\"",
    "mtime": "2022-01-12T09:52:34.486Z",
    "path": "../public/_nuxt/default-b1b2b675.mjs"
  },
  "/_nuxt/entry-f0a959c6.mjs": {
    "type": "application/javascript",
    "etag": "\"65-piTGo/FGvYQ2fPdZdtBNHzme0Ws\"",
    "mtime": "2022-01-12T09:52:34.486Z",
    "path": "../public/_nuxt/entry-f0a959c6.mjs"
  },
  "/_nuxt/index-d47e6df0.mjs": {
    "type": "application/javascript",
    "etag": "\"190-wR006xVwuOryuLjAXVGvCzDg/Vo\"",
    "mtime": "2022-01-12T09:52:34.486Z",
    "path": "../public/_nuxt/index-d47e6df0.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"794-RXmgy3vrhrfrYDHgPDjr2aqXT6Y\"",
    "mtime": "2022-01-12T09:52:34.486Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/product-8ec76cce.mjs": {
    "type": "application/javascript",
    "etag": "\"b1-VLnk0tEerTDTwxLXK9BLLLGcnpg\"",
    "mtime": "2022-01-12T09:52:34.485Z",
    "path": "../public/_nuxt/product-8ec76cce.mjs"
  },
  "/_nuxt/project-22ed2ab5.mjs": {
    "type": "application/javascript",
    "etag": "\"b1-I7s/Z/5T3QmmDJFafiXlycpwIMQ\"",
    "mtime": "2022-01-12T09:52:34.485Z",
    "path": "../public/_nuxt/project-22ed2ab5.mjs"
  },
  "/_nuxt/assets/bootstrap.03e90eef.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a48-QMp54r2XC2qj4GCBHBJOqdpL+3Q\"",
    "mtime": "2022-01-12T09:52:34.488Z",
    "path": "../public/_nuxt/assets/bootstrap.03e90eef.css"
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
const STATIC_ASSETS_BASE = "/Users/ahmadrifqib/Developer/mpi/dist" + "/" + "1641981152";
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
