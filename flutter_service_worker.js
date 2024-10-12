'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "28e4f97ea19f667d3c382d722238a21b",
"assets/AssetManifest.bin.json": "f354132a5a18862f62abcf3730cca247",
"assets/AssetManifest.json": "ba7ce3201f2748796a0d7154279bcb1b",
"assets/assets/icon/icon.png": "a10fa9ed4d86d801af0f57cfedcf2b08",
"assets/FontManifest.json": "4362449819ceb1647155d88e122ce344",
"assets/fonts/MaterialIcons-Regular.otf": "c5128570d17b4f961a7c94843fbb591c",
"assets/lib/assets/aboutus/commercialkitchen.jpg": "caef2d73fc044d66b96b52086bf783f1",
"assets/lib/assets/aboutus/experts.jpg": "76038ef8bff3766e437bec6e14ad2e28",
"assets/lib/assets/aboutus/guarantee.jpg": "6e5054f854004fb4b6630856338e5389",
"assets/lib/assets/aboutus/kitchen.jpg": "7bd32c9589ae5852b4ddea00cdbfa20e",
"assets/lib/assets/aboutus/promisetodeliver.jpg": "99a494d33858eeb38c46562a7d3c370e",
"assets/lib/assets/clients/burgerking.jpg": "c669adcbe2bc1a6ffc0bdc2d6a03c98a",
"assets/lib/assets/clients/crowne.jpg": "ca5e80b3bb1d4a26b938424ac7a8ebf0",
"assets/lib/assets/clients/eka.jpg": "4383cadc2874843fd4e18825cf217edd",
"assets/lib/assets/clients/hillcrest.jpg": "163e78ecd781b570a0b89f120f4018fd",
"assets/lib/assets/clients/hilton.jpg": "eb3b6ca75b3d150d985e5237597218eb",
"assets/lib/assets/clients/ibis.jpg": "3299c21cb57532e6e1e532e39f007377",
"assets/lib/assets/clients/java.jpg": "ddb43fdffe71bcd90cd8284278efefef",
"assets/lib/assets/clients/nairobihospital.jpg": "071e33e9a5d543e2b2093147e00cd97c",
"assets/lib/assets/clients/radisson.jpg": "c1186a7e2aed34e9c1ddca0153888dcc",
"assets/lib/assets/clients/strathmore.jpg": "e19701ab806b5eb6b8042b2876378e58",
"assets/lib/assets/icons/90690-shopping.json": "402ec3380515631c80034167d991f6b9",
"assets/lib/assets/icons/logo.jpg": "5b1676449cf0c9ccc8a12afef01971cc",
"assets/lib/assets/products/aboutus.jpg": "00b6a614024d85ff92472c3e1593554e",
"assets/lib/assets/products/alumimiumwindow.jpg": "ed53f72673c550be7a5ad381758bb616",
"assets/lib/assets/products/aluminiumslidingdoors.jpg": "122418638a48b3c05606b91390b07b36",
"assets/lib/assets/products/balcon2.jpg": "9448e849d35ceb1a1233c56f0ddd12fd",
"assets/lib/assets/products/balcon3.jpg": "cfb81f916b6e33a835d796275f058e4e",
"assets/lib/assets/products/balcony.jpg": "621c4e05e191d101c8fcb2b04014b48c",
"assets/lib/assets/products/clearglasswindows.jpg": "cdbe34675139a5de08a85a6e3800ad94",
"assets/lib/assets/products/framelessdoors.jpg": "33bb43b69e0c3524abb57a2a249f6f33",
"assets/lib/assets/products/framelessshower.jpg": "76450bd964d0546c7c968d989ccc22ab",
"assets/lib/assets/products/framelessshower2.jpg": "91716a680c8c4bf0fffbe0f1eb50ea22",
"assets/lib/assets/products/framelessshower3.jpg": "7162990c453187f17710d0f3196844f2",
"assets/lib/assets/products/framelessslidingshower.jpg": "c62d7b2f05b61d9c1f5d1c8cbd4477f5",
"assets/lib/assets/products/glassroof.jpg": "604a8f07ed02f347a868ccd8cd7693b4",
"assets/lib/assets/products/guarantee.jpg": "d78cffc753c6a8d641d794893275bb24",
"assets/lib/assets/products/heavydutyaluminiumwindow.jpg": "d563d8027ef6e8e557edf5fac6e20b54",
"assets/lib/assets/products/mirror.jpg": "d4b2f0e30dbd30ec8e254335e60fe715",
"assets/lib/assets/products/officepartitions.jpg": "568693db6738bed81eb2fbd2c42ee753",
"assets/lib/assets/products/officepartitions1.jpg": "8f8b573206f55b272dc3a77b4305b19e",
"assets/lib/assets/products/projectivewindows.jpg": "745b9ef2f100f59936842729965f672c",
"assets/lib/assets/products/pulpit.jpg": "54ed33cde19eb8c99787717971fa7d14",
"assets/lib/assets/products/pulpit1.jpg": "eb02a08b14714e607326f5cf86a128f8",
"assets/lib/assets/products/pulpit3.jpg": "c35bdaba4d9ed54a0f2bcf3ed57419bd",
"assets/lib/assets/products/slidingframelessshower.jpg": "79d376a5591b6dc3abc36ea9ca81c63b",
"assets/lib/assets/products/stainlessrailing.jpg": "d0cb0bf90f0f1efeca1a0a6ec6d72a06",
"assets/lib/assets/products/stainlessstaircase.jpg": "5a7c1cb95c9ebcfde7257a5a230acee2",
"assets/lib/assets/products/stainlessstaircasewithwindows.jpg": "288dbf2435a44a8b1cd088b73abce21c",
"assets/lib/assets/products/stainlessstaircasewithwindows2.jpg": "9abf0cf8301ad5e2cfa7ccfc96ef30aa",
"assets/lib/assets/products/whitealuminiumdoor.jpg": "dd5503f427657df5ad4d7a22d4f337bf",
"assets/lib/assets/services/coldrooms.jpg": "9da116081f9c4fe6ed479c76eae9921f",
"assets/lib/assets/services/fabrications.png": "55ca662f5e245c7fbb9587ae06e324a6",
"assets/lib/assets/services/hvac.jpg": "3cbbf89172cbb38c763d2d0beea34310",
"assets/lib/assets/services/kitchensolutions.jpg": "e44c2c65e64760a9d6b9d087d4bed1b0",
"assets/lib/assets/services/laundry.jpg": "12e01a0e2589bb7c7202dbd80a4c7937",
"assets/lib/images/aov.jpg": "faf603d967d3c141be9b97e336057210",
"assets/lib/images/clv.png": "560d71178c76f52ea4b0d1fc6f2c1abd",
"assets/lib/images/cr.png": "361ef26e954215501bdb9680b67aa12e",
"assets/lib/images/ia.jpg": "5163c4e001a555550cb942a5db4e0784",
"assets/lib/images/rp.jpg": "a37045dc987340f3a31782b6b86fff5a",
"assets/lib/images/sbc.jpg": "76b15ce9eb142031007af693fa2a38c1",
"assets/lib/images/tp.jpg": "8988bd9c6cee3c2720ad04c160563f34",
"assets/lib/images/visitors.png": "97805ea70321e4568ad2b659d59ed57a",
"assets/NOTICES": "5176fc3cc1fdb63e0de1968fea244cb3",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aeeddaf60ed9301fa0282c3fb66641c7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a10fa9ed4d86d801af0f57cfedcf2b08",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a6ce7503fa9a70b3cd92970a1fd5e7e",
"/": "5a6ce7503fa9a70b3cd92970a1fd5e7e",
"main.dart.js": "b06569d970cd6ab21ccc8d07fce8af91",
"manifest.json": "a42b2c57ace8d4dbeaa0d2f119798da0",
"version.json": "36ec6a413f6c12039f662a299bd8e8ba"};
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
