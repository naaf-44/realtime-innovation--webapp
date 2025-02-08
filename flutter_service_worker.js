'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5181c31027bd98f914d2877161117135",
"version.json": "2d80ebacee7adb5ddbfd4efa9ebbd44d",
"index.html": "f8889e5d3ef16a224216b4d06fd5d91b",
"/": "f8889e5d3ef16a224216b4d06fd5d91b",
"main.dart.js": "095f09d5c724dbe057eaa251dedacabb",
"realtime-innovation-web/.git/config": "69144e6aa3a8603efa1978e1cca7356c",
"realtime-innovation-web/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"realtime-innovation-web/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"realtime-innovation-web/.git/objects/8e/e268033685f99a67bfee8d54219afaf3598142": "e2c8152fb6df723d7b593731dbfc76e0",
"realtime-innovation-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"realtime-innovation-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"realtime-innovation-web/.git/logs/HEAD": "fe965b9a81dfad6494df65b63bc89e40",
"realtime-innovation-web/.git/logs/refs/heads/main": "fe965b9a81dfad6494df65b63bc89e40",
"realtime-innovation-web/.git/logs/refs/remotes/origin/HEAD": "ec82b4f531c8fd77790ddd6ba46d06f8",
"realtime-innovation-web/.git/logs/refs/remotes/origin/main": "f954a63ab3b19aabef135d2804b7cfdd",
"realtime-innovation-web/.git/description": "e2a34fd70aa09a2669731957d447eead",
"realtime-innovation-web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"realtime-innovation-web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"realtime-innovation-web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"realtime-innovation-web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"realtime-innovation-web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"realtime-innovation-web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"realtime-innovation-web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"realtime-innovation-web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"realtime-innovation-web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"realtime-innovation-web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"realtime-innovation-web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"realtime-innovation-web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"realtime-innovation-web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"realtime-innovation-web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"realtime-innovation-web/.git/refs/heads/main": "3684098f2158936c6602705d5efac224",
"realtime-innovation-web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"realtime-innovation-web/.git/refs/remotes/origin/main": "3684098f2158936c6602705d5efac224",
"realtime-innovation-web/.git/index": "08eb3312b0081a895440633e4adf344e",
"realtime-innovation-web/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"realtime-innovation-web/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6aa43694ae17ffdf36479f6cf791d7cf",
"assets/AssetManifest.json": "0a2f23a800bbd317f5a836f204c28705",
"assets/NOTICES": "aac9a7f6116e3b3668ae8543351d917c",
"assets/FontManifest.json": "a924d575dc55ccd81d1725176cb99443",
"assets/AssetManifest.bin.json": "cf9e4274c54db65e3200e77ca5b4ab96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "17cc8d78a63e6bfe9fdab0f221840792",
"assets/fonts/MaterialIcons-Regular.otf": "3c08f868674d19a2cf50f8a610f7c72e",
"assets/assets/lottie/no_data.json": "8bac65d70eb97d694916c897aadd6298",
"assets/assets/font/Roboto-Regular.ttf": "54a91b0619ccf9373d525109268219dc",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
