'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f6ff0abe82ae5328d58997316e09b71e",
"assets/AssetManifest.bin.json": "a0f8604b1e08b5b2079b6aa9fb7c7ca0",
"assets/AssetManifest.json": "52fc154d29d442c81b7b9943cef618bd",
"assets/assets/data/creatures.json": "c8c8e49355b100d1eb9bcffc3cacd12b",
"assets/assets/data/element_chart.json": "81cb680449c36f9d7f97db794f848950",
"assets/assets/img/bast.png": "2f40ea72af27eb16f05c91d6e7a342e1",
"assets/assets/img/bat.png": "3bb4021a3537eb1876be2bf3d4df48f6",
"assets/assets/img/bear.png": "1edb1a01eabde703b4505d5a94b95f6c",
"assets/assets/img/beetle.png": "a74c6c7d7b99f66ba58f6d74f7844592",
"assets/assets/img/boar.png": "a89b25e4cc8f3a76bee95ac0a8d1369d",
"assets/assets/img/bull.png": "c5296a85f27144b4ed48aa320425e928",
"assets/assets/img/crab.png": "81873332e0c6e06711fc454eae97b75c",
"assets/assets/img/crocodile.png": "aaf8ff60f38f3e014d2417e911723b25",
"assets/assets/img/deer.png": "22c733da069a8d3257242f65f24c977b",
"assets/assets/img/dream.png": "dfd623e5d8122330c4f84e1831384364",
"assets/assets/img/eagle.png": "3ceb4a9bd3ec48b4d39fcff49a530546",
"assets/assets/img/fox.png": "0c03842273a1dc4b76f0380ce92fed75",
"assets/assets/img/frog.png": "e4cbbaeed796af73d3683f430f3c3421",
"assets/assets/img/gametk.png": "8db21c4251e4e00c5c91fb71e147cdbd",
"assets/assets/img/guy.png": "2909c48f82bc662f62f5eba2b1319dc2",
"assets/assets/img/horse.png": "d621a348c539d62e81cca50989a8db9a",
"assets/assets/img/hyena.png": "1bc780ca700648e14bf72aa9099c9648",
"assets/assets/img/jellyfish.png": "212d2872374cbdc01c8e3f96d8fa5db7",
"assets/assets/img/lion.png": "3b64a2ea7f2630fd6a20fd4c848928b2",
"assets/assets/img/lizard.png": "e517edb56ae4978e9ed977c9d377b875",
"assets/assets/img/logo.png": "f2acf30e3beeee2a64bc2218c57cf819",
"assets/assets/img/mantis.png": "4a957a7399777be5d8b360c143958e92",
"assets/assets/img/march.png": "23165c552773a3eff8b3cb8fd9b780d0",
"assets/assets/img/meen.png": "e640176ce60f1b352c869e7710ba274c",
"assets/assets/img/monkey.png": "b2bb7e0664b96dfb2b96f8e3b6c3f06e",
"assets/assets/img/octopus.png": "989fd52011ab74d92d4e4b3c7b40df72",
"assets/assets/img/owl.png": "2a3f1cdef95b4a17b357726d74655ff6",
"assets/assets/img/pritty.png": "3fe4a75b2a68c7cc788a90c9cb43af32",
"assets/assets/img/raven.png": "ba037bf4160748178fc16c0335e27f87",
"assets/assets/img/rhino.png": "4a41f11163b791b04e5c007964a32f87",
"assets/assets/img/scorpion.png": "a2167aa81cd6381349a89fab320ad3c1",
"assets/assets/img/shark.png": "86f577ba4ef7df0be9ecde2a58d44a55",
"assets/assets/img/snake.png": "933fbde4898ad9cac84141184c170320",
"assets/assets/img/spider.png": "4dbf38026b7f194ef3813956b78e2316",
"assets/assets/img/spite.png": "f6170bbe5cc6eaa019d7b22764bdd329",
"assets/assets/img/swan.png": "7ad528614dfdb35bea81aedae27e7a8a",
"assets/assets/img/test.png": "2a2d120c8be74ae004d6b689aacd0141",
"assets/assets/img/tiger.png": "06725e53214ae537ab10f98f1daf4fb7",
"assets/assets/img/turtle.png": "660c669985975c2ae1ae13c8606cd9d6",
"assets/assets/img/wolf.png": "ae23107d7dcf5d094cd6f56e1705dc2c",
"assets/assets/sounds/die.wav": "f2db27af1dfa0c2ee81827e84e966c72",
"assets/assets/sounds/hit.wav": "bcce95c69684258ff3d679c0c8c856e2",
"assets/assets/sounds/losing.wav": "92213519e5ffb762a8021abae41ef92e",
"assets/assets/sounds/start.wav": "7d49ccb5c47f15a22fae1574375a9f5e",
"assets/assets/sounds/win.wav": "afa6ad1c85a36c31f786f189c54f9c17",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "badd4fa121cd790e298073c4fbb9b311",
"assets/NOTICES": "45e0ad569e44382e51341b52505a47eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "523b0031ae598d8e39a7b9c078568ec8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9ed0bce54c4b5a31c1a7678ecef17f4",
"/": "c9ed0bce54c4b5a31c1a7678ecef17f4",
"main.dart.js": "d38fe448096f0f7487796a830728018a",
"manifest.json": "83d533e5ab22a8928a684b90a19bb48d",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
