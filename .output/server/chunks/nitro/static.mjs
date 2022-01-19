import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/Footer-b98d8918.mjs": {
    "type": "application/javascript",
    "etag": "\"54f-YbNMYgKHSZjycbojs0CUgFIZKzE\"",
    "mtime": "2022-01-13T07:13:05.750Z",
    "path": "../public/_nuxt/Footer-b98d8918.mjs"
  },
  "/_nuxt/Header-2706ccd8.mjs": {
    "type": "application/javascript",
    "etag": "\"36e-E74phae7LikVdmBJMp4Qrdhlats\"",
    "mtime": "2022-01-13T07:13:05.750Z",
    "path": "../public/_nuxt/Header-2706ccd8.mjs"
  },
  "/_nuxt/about-ed08082f.mjs": {
    "type": "application/javascript",
    "etag": "\"902-NdKnJpwT7kcdFsOSwyAVo36XosU\"",
    "mtime": "2022-01-13T07:13:05.749Z",
    "path": "../public/_nuxt/about-ed08082f.mjs"
  },
  "/_nuxt/bootstrap-5dcd9ffd.mjs": {
    "type": "application/javascript",
    "etag": "\"1a419-I6UwVhOGnWJmjz0yDf1OXjTWJcE\"",
    "mtime": "2022-01-13T07:13:05.748Z",
    "path": "../public/_nuxt/bootstrap-5dcd9ffd.mjs"
  },
  "/_nuxt/default-62dfba33.mjs": {
    "type": "application/javascript",
    "etag": "\"189-TJND9XBAhWjUkGYO0yD1BqvS1Os\"",
    "mtime": "2022-01-13T07:13:05.747Z",
    "path": "../public/_nuxt/default-62dfba33.mjs"
  },
  "/_nuxt/entry-33acfcfa.mjs": {
    "type": "application/javascript",
    "etag": "\"65-Lien9xDv1rBHtESkiyhVkfFseTs\"",
    "mtime": "2022-01-13T07:13:05.747Z",
    "path": "../public/_nuxt/entry-33acfcfa.mjs"
  },
  "/_nuxt/index-418e2b24.mjs": {
    "type": "application/javascript",
    "etag": "\"190-+tebbREY+mTQOwVG6YpInqOBzDs\"",
    "mtime": "2022-01-13T07:13:05.747Z",
    "path": "../public/_nuxt/index-418e2b24.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"794-mRmtalaHV2KxMjbPpZP8qLQwm0k\"",
    "mtime": "2022-01-13T07:13:05.746Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/product-958f8496.mjs": {
    "type": "application/javascript",
    "etag": "\"b1-pqoky207OsSyMhj0Nid5Uytekyg\"",
    "mtime": "2022-01-13T07:13:05.746Z",
    "path": "../public/_nuxt/product-958f8496.mjs"
  },
  "/_nuxt/project-60e75bc1.mjs": {
    "type": "application/javascript",
    "etag": "\"b1-oX+iGEiNuia40Jf3SIjHe5RIHhc\"",
    "mtime": "2022-01-13T07:13:05.746Z",
    "path": "../public/_nuxt/project-60e75bc1.mjs"
  },
  "/_nuxt/assets/bootstrap.08cd957b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a48-GUNN3Vg37wxLvFib9mdgdz/0sUI\"",
    "mtime": "2022-01-13T07:13:05.749Z",
    "path": "../public/_nuxt/assets/bootstrap.08cd957b.css"
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
const STATIC_ASSETS_BASE = "/Users/ahmadrifqib/Developer/mpi/dist" + "/" + "1642057983";
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
