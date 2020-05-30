importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);
workbox.core.setCacheNameDetails({
  prefix: "blog-angular",
  suffix: "v1.0.0",
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  /.*\.html$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "html",
  })
);

workbox.routing.registerRoute(
  /.*\.css$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "css",
  })
);
workbox.routing.registerRoute(
  /.*\.js$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "js",
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// workbox.routing.registerRoute(
//   /\/database\/blog\/(.*?)\/data$/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "api",
//   })
// );
