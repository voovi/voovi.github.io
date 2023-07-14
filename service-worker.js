self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('task-timer-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png',
        '/path/to/other/assets' // Добавьте другие ресурсы для кэширования
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
