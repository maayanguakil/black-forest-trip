const C = 'bf-cache-v9';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const EXTRA = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(C)
      .then(c => c.addAll(CORE).then(() => {
        // precache map library, but don't fail install if the CDN is unreachable
        return Promise.all(EXTRA.map(u => c.add(u).catch(() => {})));
      }))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin === location.origin && (e.request.mode === 'navigate' || u.pathname.endsWith('index.html'))) {
    e.respondWith(
      fetch(e.request).then(r => { const cp = r.clone(); caches.open(C).then(c => c.put('./index.html', cp)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(e.request, cp)); }
      return res;
    }).catch(() => new Response('', { status: 504 })))
  );
});
