import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
import assert from 'node:assert/strict';
import {deployment} from '../config/deployment.mjs';
const root = resolve('dist');
const {base, site} = deployment;
const prefix = base.endsWith('/') ? base : `${base}/`;
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir,entry.name)) : join(dir,entry.name)))).flat();
}
const all = await files(root);
assert.doesNotMatch(await readFile('Index.html','utf8'), /cybersecurity|osint|ethical hacking|pentesting|security scanner/i, 'The preserved legacy HTML must not advertise retired topics');
const htmlFiles = all.filter(file=>extname(file)==='.html');
assert.equal(htmlFiles.length, 8, 'Home, six projects, and 404 must be generated');
for (const file of htmlFiles) {
  const html = await readFile(file,'utf8');
  assert.doesNotMatch(html, /cybersecurity|osint|ethical hacking/i, `${file}: retired profile topics must not be published`);
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
assert.ok((await stat(join(root,'images/blaise-portrait.webp'))).size<500000,'Portrait should be optimized');
const home = await readFile(join(root,'index.html'),'utf8');
assert.ok(home.includes('https://pdfhost.io/v/eD8pKwPAVc_DMB_CV'),'The supplied CV must be linked');
assert.ok(home.includes('Founder &amp; CEO') || home.includes('Founder & CEO'),'CEO role must be visible');
for(const link of ['https://wimaza.vercel.app/','https://pezaas.vercel.app/','https://outreachhub-dc64f.web.app/','https://study-craft-ai-seven.vercel.app']) {
  assert.ok(home.includes(`href="${link}"`), `Homepage needs the supplied link: ${link}`);
}
for(const name of ['pezaas','outreachhub']) {
  assert.ok(home.includes(`images/${name}-preview.webp`),`${name} must use the real screenshot`);
  assert.ok((await stat(join(root,`images/${name}-preview.webp`))).size < 1000000,`${name} preview should be optimized`);
}
console.log(`Verified ${htmlFiles.length} HTML pages, local assets, SEO, supplied project/company/CV links, real previews, résumé, and portrait.`);
