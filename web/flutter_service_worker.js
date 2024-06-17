'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "94f9500463b7b188d7d7281502d2e706",
"favicon.ico": "608c05605258ef5c1b63c3c65e13534d",
"index.html": "2d846fe397f449fa142dabdca0a3170f",
"/": "2d846fe397f449fa142dabdca0a3170f",
"main.dart.js": "0b5410be225233f2cd0cfeec965d49be",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/favicon.ico": "608c05605258ef5c1b63c3c65e13534d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/fevicon.png": "c843545c2082af59ebb35b4d91c0f4bf",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "07803f31ba7589a9dad064640639013a",
"assets/AssetManifest.json": "9da96100206b8c61053f74df1fabbc1c",
"assets/NOTICES": "07fab5b3ee2ef913f5639b98ac478ec1",
"assets/FontManifest.json": "ee330b453adffc411cf5399c36204ecb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f6725d6e989a34edbdcbd341953f4a5a",
"assets/fonts/MaterialIcons-Regular.otf": "793c204c6216b5eb2c7608e449548713",
"assets/assets/svg/info_icon.svg": "bb0241b81f5898c83c35d5dea8c0875f",
"assets/assets/svg/coming_soon_icon.svg": "316b45351867b9adac029694a1737044",
"assets/assets/svg/success_icon.svg": "5506acde72aabb6d81492162d9e763bd",
"assets/assets/svg/search_icon.svg": "792e98ccea3b3966b0847a2084f19ad3",
"assets/assets/svg/home.svg": "944622d41fcce1c1b53cc25708b2ae7e",
"assets/assets/svg/downloads_icon.svg": "4cab9af19164c66e6c10f10566208bb4",
"assets/assets/svg/settings_icon.svg": "1be89f892ed0fbb73593efd9ff690b2a",
"assets/assets/svg/delete_icon.svg": "20e938d36419420bd25a9f4ff4b2814e",
"assets/assets/svg/app_store_image.svg": "c9b35e2f5e4fa1e3c29e95799c5acca9",
"assets/assets/svg/sort_icon.svg": "f86b5f011a0cca6a633bb20977bee6ee",
"assets/assets/svg/mobile_icon.svg": "b51b192d8622d9d6a59c8c105c0fa267",
"assets/assets/svg/google_play_image.svg": "d20f5bf274f27d27be7ab2bb409d7100",
"assets/assets/svg/reports_icon.svg": "96343c567761c0e3aa6b334bbac51995",
"assets/assets/svg/user_avatar.svg": "31b7ce5fce79094f3d00ae4a2e21d8ab",
"assets/assets/svg/connection_icon.svg": "31c081e63146cdf0dbe77b0764ae9c56",
"assets/assets/svg/products_icon.svg": "ef6109b45b14838f32e0a499616ce0bd",
"assets/assets/svg/app_logo.svg": "01d22be0788ca982e356ee265a50720f",
"assets/assets/svg/pdf_icon.svg": "664bf9d8b4117353c1dc6e934629f037",
"assets/assets/svg/user_icon.svg": "03cd3d21398eec48ce547d775b4c1b3e",
"assets/assets/svg/company_icon.svg": "33f7cea5a40718151055108126527507",
"assets/assets/svg/logout_icon.svg": "30edaf66b4c9c6ac99d4154fd16bec4d",
"assets/assets/svg/order_icon.svg": "d4c2881c3e52edca215026a579096461",
"assets/assets/svg/notification_icon.svg": "9c538c0d05862a71908737b050a86d2a",
"assets/assets/svg/welcome_image.svg": "ae5f394fa5f25c1dd926712fba476752",
"assets/assets/images/user_avatar.png": "bcb9aee1c768d087aaaceacc0ea1bdd7",
"assets/assets/images/google_play_image.png": "08e1ca32e50b2ba072d750705068a2c8",
"assets/assets/images/app_store_image.png": "0cfa304c8796b4cdae18edf242877aaa",
"assets/assets/fonts/Inter-Regular.ttf": "851660f90f21dba5ec35b1765fdd426a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
