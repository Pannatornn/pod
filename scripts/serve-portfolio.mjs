import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', process.argv[2] || 'out');
const port = Number(process.env.PORT || 3000);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.pdf':'application/pdf'};
try { await stat(resolve(root, 'index.html')); } catch { throw new Error('No built site. Run npm run build first, or use npm run dev.'); }
createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method || '')) { response.writeHead(405, {Allow:'GET, HEAD'}); response.end(); return; }
    const url = new URL(request.url || '/', 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const file = resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!file.startsWith(root + sep)) { response.writeHead(403); response.end('Forbidden'); return; }
    const data = await readFile(file);
    response.writeHead(200, {'Content-Type':types[extname(file).toLowerCase()] || 'application/octet-stream','Content-Length':data.length,'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch { response.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); response.end('Not found'); }
}).listen(port, '0.0.0.0', () => console.log(`Portfolio available on port ${port}`));
