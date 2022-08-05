import express from "express"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import fs from "fs"
import path from "path"
import nodefetch from "node-fetch"
import proxyagent from "proxy-agent"
import request from 'request'
const app = express();
const agent = new proxyagent();
const assetCache = new Map();
const indexHTML = fs.readFileSync(path.join(__dirname, "404.html"), { encoding: "utf8" });
var html = indexHTML;
app.all('/d/*', function(req, res) {
  const str = req.originalUrl;
  const trs = str.slice('\x32');
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all('/sticker*', function(req, res) {
  const str = req.originalUrl;
  const trs = str;
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all('/asset*', function(req, res) {
  const str = req.originalUrl;
  const trs = str;
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all("*", (req, res) => {
  res.send(html);
});
app.listen(2022);
