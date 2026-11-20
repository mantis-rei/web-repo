import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve('dist');
const base = process.env.BASE_PATH || '/web-repo';
const site = process.env.SITE_URL || 'https://mantis-rei.github.io';
const prefix = base.endsWith('/') ? base : `${base}/`;
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir,entry.name)) : join(dir,entry.name)))).flat();
}
const all = await files(root);
const htmlFiles = all.filter(file=>extname(file)==='.html');
assert.equal(htmlFiles.length, 8, 'Home, six projects, and 404 must be generated');
for (const file of htmlFiles) {
  const html = await readFile(file,'utf8');
  assert.equal((html.match(/<h1\b/g)||[]).length,1, `${file}: exactly one primary heading`);
  assert.match(html, /<html lang="en"/, `${file}: language`);
  assert.match(html, /name="description" content="[^"]+"/, `${file}: description`);
  assert.match(html, /rel="canonical" href="https:\/\//, `${file}: canonical`);
  assert.match(html, /application\/ld\+json/, `${file}: structured data`);
  for(const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    const raw = match[1].replaceAll('&amp;','&');
    if(!raw.startsWith('/')) continue;
    const path = decodeURIComponent(raw.split(/[?#]/)[0]);
    assert.ok(path === base || path.startsWith(prefix), `${file}: link does not respect base: ${path}`);
    const relative = path.slice(base === '/' ? 1 : base.length).replace(/^\//,'');
    let target = resolve(root, relative);
    const info = await stat(target).catch(()=>null);
    assert.ok(info, `${file}: missing local destination ${raw}`);
    if(info.isDirectory()) target=join(target,'index.html');
    await stat(target);
  }
  for(const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0],/\balt="[^"]+"/,'Images need alt text');
}
const sitemap = await readFile(join(root,'sitemap-0.xml'),'utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,7,'Sitemap should index home and all six project pages');
const robots=await readFile(join(root,'robots.txt'),'utf8');
assert.ok(robots.includes(`${site}${prefix}sitemap-index.xml`),'Robots must point to the correct sitemap');
assert.ok((await stat(join(root,'blaise-dushime-cv.pdf'))).size>1000,'Résumé must be included');
assert.ok((await stat(join(root,'images/blaise-portrait.webp'))).size<500000,'Portrait should be optimized');
console.log(`Verified ${htmlFiles.length} HTML pages, all local links/assets, metadata, sitemap, robots, résumé, and portrait.`);
