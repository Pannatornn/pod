import { access, cp, mkdir, readFile, rename, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'portfolio');
const output = resolve(root, 'out');
const staging = resolve(root, '.portfolio-build');
const html = await readFile(resolve(source, 'index.html'), 'utf8');
for (const name of ['profile', 'transcript', 'sop', 'projects', 'experiences', 'activities', 'certificates']) {
  if (!html.includes(`id="${name}"`)) throw new Error(`Missing section: ${name}`);
}
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const path = match[1];
  if (/^(?:https?:|mailto:|tel:|data:)/.test(path)) continue;
  await access(resolve(source, path));
}
for (const name of ['content.js', 'content-renderer.js', 'app.js']) {
  new Script(await readFile(resolve(source, name), 'utf8'), {filename: name});
}
const context = {window: {}};
new Script(await readFile(resolve(source, 'content.js'), 'utf8')).runInNewContext(context);
const content = context.window.PORTFOLIO_CONTENT;
if (!content || content.transcript.length !== 2 || content.projects.length < 2 || content.camps.length < 3) {
  throw new Error('Portfolio content is missing the requested image slots, projects, or camps.');
}
async function checkImages(value) {
  if (!value || typeof value !== 'object') return;
  if (typeof value.src === 'string' && value.src && !/^https?:\/\//.test(value.src)) await access(resolve(source, value.src.replace(/^\//, '')));
  for (const child of Object.values(value)) await checkImages(child);
}
await checkImages(content);
await rm(staging, {recursive: true, force: true});
await mkdir(staging, {recursive: true});
await cp(source, staging, {recursive: true});
await rm(output, {recursive: true, force: true});
await rename(staging, output);
console.log('Portfolio built successfully: out/');
console.log(`7 sections · ${content.projects.length} projects · ${content.experiences.length} experience slots · ${content.camps.length} camps`);
