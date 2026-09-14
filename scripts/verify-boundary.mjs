import { build } from "esbuild";
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const result = await build({
  entryPoints: ["plugin-src/main.ts"], bundle: true, write: false, metafile: true,
  external: ["obsidian", "electron", "@codemirror/state", "@codemirror/view"],
  format: "cjs", platform: "browser", target: "es2018", logLevel: "silent",
});
const inputs = Object.keys(result.metafile.inputs);
assert(inputs.every(path => path.startsWith("plugin-src/") || path.startsWith("node_modules/hls.js/")), "Unexpected runtime source; review plugin/website boundary");
const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
const pkg = JSON.parse(await readFile("package.json", "utf8"));
const versions = JSON.parse(await readFile("versions.json", "utf8"));
assert.equal(manifest.id, "qiaomu-radio", "Preserve existing plugin identity");
assert.equal(pkg.version, manifest.version);
assert.equal(versions[manifest.version], manifest.minAppVersion);
console.log(`Verified ${inputs.length} runtime inputs: plugin source and HLS only; version ${manifest.version}.`);
