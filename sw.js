const CACHE_NAME = 'minproducer-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'manifest.json',
  'assets/bg-pattern.svg',
  'icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  // Chỉ xử lý các request HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        // Clone request vì nó chỉ có thể được sử dụng một lần
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Kiểm tra response có hợp lệ hay không
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response vì nó chỉ có thể được sử dụng một lần
            const responseToCache = response.clone();

            // Chỉ cache các request HTTP/HTTPS
            if (fetchRequest.url.startsWith('http')) {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          }
        ).catch(() => {
          // Trả về response từ cache nếu fetch thất bại
          return caches.match(event.request);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});