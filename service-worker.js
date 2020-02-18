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
    "revision": "3d3984a6ea0192b2ee70c496243ee2a5"
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
    "url": "assets/js/11.be1ba5bc.js",
    "revision": "6405baa1d7f5acfeefc29e822c113af7"
  },
  {
    "url": "assets/js/12.36ac4b26.js",
    "revision": "e21a685b3ccccd3f92801159b5a8e68e"
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
    "url": "assets/js/app.90b18ee7.js",
    "revision": "b53faea68e29f59c7016fe07a09f5296"
  },
  {
    "url": "bungeecord.html",
    "revision": "02871936f2f2f4611bc33af5cf1d51ab"
  },
  {
    "url": "commands/admin.html",
    "revision": "e355573454c74b99d3c2f50eb47d1c42"
  },
  {
    "url": "commands/banking.html",
    "revision": "cc04c3c2a5d450aca2fb8bc58b4bbf4b"
  },
  {
    "url": "commands/player.html",
    "revision": "4bdb26bfdc770bf58e880ff6201fe68a"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "ae5ae97374ca2723dc0dd1070090c9c2"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "42423c9ff95f0397e4deea6370e52dbe"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "1ad581055edbfe01cfe1bde1553e564a"
  },
  {
    "url": "en/commands/player.html",
    "revision": "9f5b5f3c825da794dd449cffe939526e"
  },
  {
    "url": "en/faq.html",
    "revision": "0c7ab6d7f543267d58d8dfa8dcdf45fe"
  },
  {
    "url": "en/index.html",
    "revision": "1d10d03dcaf6a217d12257649a49d54c"
  },
  {
    "url": "en/permissions.html",
    "revision": "761fcf795be11f5115e026ba4d08136c"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "0c281b923b3fb269c16024cea9be7893"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "7f1abc9517492194ca6fec396be98d19"
  },
  {
    "url": "en/setup.html",
    "revision": "0104153356a3c4c68841c03cb862c223"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "d9d1a15881dbfc941830ae947243a621"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "903804153c2ec0f0604b5288f1469499"
  },
  {
    "url": "faq.html",
    "revision": "1e40100b14c6be5d728e21e65c054ddf"
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
    "revision": "ce508ed88b3ee25463c5a15da0bc0a9d"
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
    "revision": "bc0a9184fd4629e6ea958d1fe9aff372"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "099fd80d6212336b4fcccb06f34bdd37"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "a1c38dab2f3535f5a292ec5303e61c2b"
  },
  {
    "url": "setup.html",
    "revision": "122d375d26cf4d9d4843de8c713d5bea"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "525701781a2692fadde7ea982bc13163"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "dfc872df1f58616cd631870d97acf1e9"
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
