/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ac19a7f7053e9e6e4bdb082c56e80d96"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "44cf46e8d7fcf99599a3d0ceb8cfd754"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "2f5534f0c11a94318898d8e8e67a7ea9"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.946e56e7.css",
    "revision": "062f6938c1656c75944b05137c08d847"
  },
  {
    "url": "assets/img/detectiongate_setup_1.25bd04bc.png",
    "revision": "25bd04bc742bd3a274b911e27ccbc11d"
  },
  {
    "url": "assets/img/detectiongate_setup_2.ff0bc795.png",
    "revision": "ff0bc7952c0736ce49f89dfcd1afdada"
  },
  {
    "url": "assets/img/levelchecknpc_setup.372c0584.png",
    "revision": "372c0584f661e93786e291d7c481f12e"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_en.f6f6dc72.png",
    "revision": "f6f6dc72c4367f42dedc18e6ae0bdf00"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_nl.4b88bbec.png",
    "revision": "4b88bbec2fd5ba1942a5a2ab61ccb920"
  },
  {
    "url": "assets/img/pinconsole_setup_en.499d9d4c.png",
    "revision": "499d9d4c9288068bad9e11fca195981b"
  },
  {
    "url": "assets/img/pinconsole_setup_nl.539ed98e.png",
    "revision": "539ed98e626f653025f9c5d3ec64e147"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5bfac960.js",
    "revision": "a87a597005f9478ba7d1588fd0883034"
  },
  {
    "url": "assets/js/11.f3da62e4.js",
    "revision": "e5d508e186176b6d84880b2d93ab63c9"
  },
  {
    "url": "assets/js/12.361c51cc.js",
    "revision": "a8306cd9cd949312baf7c89561c81d75"
  },
  {
    "url": "assets/js/13.7e9bdd5c.js",
    "revision": "ba11e41d3c876fe6a5e8ca2e87979a5b"
  },
  {
    "url": "assets/js/14.545a6632.js",
    "revision": "724f2cb5fc0b50b041fbe62c7efde31d"
  },
  {
    "url": "assets/js/15.e8615707.js",
    "revision": "107f5d1b6bbc954a65f8f61641a70d19"
  },
  {
    "url": "assets/js/16.0ded26de.js",
    "revision": "65318d57842618d74f404c20e27d2fef"
  },
  {
    "url": "assets/js/17.4076c83f.js",
    "revision": "95b0d75da782c935b048c905dda8be06"
  },
  {
    "url": "assets/js/18.b474a3a7.js",
    "revision": "a7dacae94a9516970a6440212a254422"
  },
  {
    "url": "assets/js/19.2ffac2ea.js",
    "revision": "a6cd5d890fa37b04c3e205d6d415052d"
  },
  {
    "url": "assets/js/2.68dffde5.js",
    "revision": "199074b043830de92c0a603f71af1dd8"
  },
  {
    "url": "assets/js/20.69b7d073.js",
    "revision": "56171d5d8550213c2fee5f6d09cd2b83"
  },
  {
    "url": "assets/js/21.2f53c848.js",
    "revision": "4de8bf8c13a0b8a095f4f6437ff78200"
  },
  {
    "url": "assets/js/22.6d13f21a.js",
    "revision": "011c613af349d797e5454d43f403d84c"
  },
  {
    "url": "assets/js/23.38f34c90.js",
    "revision": "6d1e3257a4a6860953df092de16b0191"
  },
  {
    "url": "assets/js/24.248c92f5.js",
    "revision": "b8fe87de627893fa06bd307cd1424b9f"
  },
  {
    "url": "assets/js/25.b38e3b6a.js",
    "revision": "52050234f494cb3dec48f1ca708fea1c"
  },
  {
    "url": "assets/js/26.5d64eeca.js",
    "revision": "94808873b0dbd17c7ad8badeb4db95b6"
  },
  {
    "url": "assets/js/27.691f33c2.js",
    "revision": "aa274e8ade3c44e7d6396936c871b113"
  },
  {
    "url": "assets/js/28.d923f062.js",
    "revision": "c5557e23d6e5a9f8d7502bc82a65e44c"
  },
  {
    "url": "assets/js/29.bdf618d0.js",
    "revision": "b0cffbe3c39c01cbfeb594b79db5641d"
  },
  {
    "url": "assets/js/3.d085a529.js",
    "revision": "91a8cbe25a35c80c1f63f844bb99e97c"
  },
  {
    "url": "assets/js/4.d0739e27.js",
    "revision": "9e46079212ce4e6e0cb75a31a2ec4bc2"
  },
  {
    "url": "assets/js/5.86368e16.js",
    "revision": "6b27d1ee601e122398c5655b41a63835"
  },
  {
    "url": "assets/js/6.330e0495.js",
    "revision": "1660b7c61f9af4294068eb945e1c2ef8"
  },
  {
    "url": "assets/js/7.fab5ac3e.js",
    "revision": "bc6d6cfa1a4cf5d2a7503fc8d52d39fd"
  },
  {
    "url": "assets/js/8.c3072d71.js",
    "revision": "1d9ec1a9dcde4bad6b465bbc7a25d24b"
  },
  {
    "url": "assets/js/9.b76844dd.js",
    "revision": "905a0efc2b50d080c2245e0393b268dc"
  },
  {
    "url": "assets/js/app.e3461c7b.js",
    "revision": "4e0128753b13e5e5474ee1970954e7fa"
  },
  {
    "url": "bungeecord.html",
    "revision": "53dbe2f86fbf0f31d4da98aeb77e46a8"
  },
  {
    "url": "commands/admin.html",
    "revision": "faa9e91576066ad9a6d5a46c5bb0f648"
  },
  {
    "url": "commands/banking.html",
    "revision": "704dee72f6eed62c436d887df7332aec"
  },
  {
    "url": "commands/player.html",
    "revision": "4780f16b59a6e1ffd69b261c44d63240"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "e2c8fe93282397e453be26a32a415d40"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "b111e20261d76bf13160957179ebde0f"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "953581c78ab023f9f03b68c45c9a7902"
  },
  {
    "url": "en/commands/player.html",
    "revision": "7ef8489d306984ba3346bf5b5b99707b"
  },
  {
    "url": "en/faq.html",
    "revision": "31a6d3ddaf0f3b339fb394cb57a55ace"
  },
  {
    "url": "en/index.html",
    "revision": "c268301b1ad238ee79fef4ff2850ff34"
  },
  {
    "url": "en/permissions.html",
    "revision": "5e309d44d34d061e99c90e104be84839"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "86061182774264441e64656192a5c700"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "7aec9f165cc47089cc6ba8924eb13a8b"
  },
  {
    "url": "en/setup.html",
    "revision": "85d4c30e6abb826e5f18d3252edc0f7d"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "93e01e0cbe886c1f47631f9da5d7259b"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "a8b0ee8badb64983b69adc109abc79c6"
  },
  {
    "url": "faq.html",
    "revision": "c6370b22435f8468616ee8861ba8dcd9"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "00ecb916a548e8be44ec3467e1b66d6b"
  },
  {
    "url": "favicon-194x194.png",
    "revision": "e13db8e5c6827bd04a268948549ca396"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4e9663215a5f70a874e25ebe5e0ca6c7"
  },
  {
    "url": "index.html",
    "revision": "78d476bb10afdb3f04eb737ff45e27b1"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "a4837080efeeaf06ae40e214e744763f"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "07c1b3f42278810020c6bda24ec48e25"
  },
  {
    "url": "permissions.html",
    "revision": "4d6d9cd041afdb28ed1f32bb2fbe81b1"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "1fd643fc428eed198fb062bc545da43c"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "d687cc778a84fca2bcf7335b2aba7d3d"
  },
  {
    "url": "setup.html",
    "revision": "218a9f8c035e6a4e2a404897c2a6a516"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "2fe491f694f72b5bf653d2e3c5db219b"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "13ddd12ef5eb097a4444e37f5fdc6909"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
