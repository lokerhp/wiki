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
    "revision": "f46489333050f33225161aca1912619c"
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
    "url": "assets/js/11.11150522.js",
    "revision": "ca844b51344daa5b43657af5effc9ee3"
  },
  {
    "url": "assets/js/12.367a4711.js",
    "revision": "62578afd62bc28c3b470a1c203655798"
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
    "url": "assets/js/app.0196124d.js",
    "revision": "ab926037693f03ae19790629e2d634e9"
  },
  {
    "url": "bungeecord.html",
    "revision": "50987793d0437d9a78ba1e33369ae1dc"
  },
  {
    "url": "commands/admin.html",
    "revision": "3849d2d14e7ee47b59ac4ae23508b1d4"
  },
  {
    "url": "commands/banking.html",
    "revision": "b8c87c7d4c450e284b60e4ea1b10155f"
  },
  {
    "url": "commands/player.html",
    "revision": "fc8aa8392bff0ac15a88f9d402e27f74"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "dacafa36b2803bd9d134f27fe656a821"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "24ca5a4c526034a322a12389cb857126"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "57c704c811d7d3c752ca02bdf44fbc97"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f01cfa237725cb60fac9eb0b2cb30079"
  },
  {
    "url": "en/faq.html",
    "revision": "c69203bb089dfae9f667ab82f04a6589"
  },
  {
    "url": "en/index.html",
    "revision": "ca4221c8c497194875e5b1a7df100249"
  },
  {
    "url": "en/permissions.html",
    "revision": "45e2035b312efb1490d493a5d816e261"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "1b04b110f5eb4787b4e842e65a9349da"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "5d59e8ec511b959b58ae735837b5b361"
  },
  {
    "url": "en/setup.html",
    "revision": "3084cb3b15f6ec2b067102aceb8ad14e"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "7f9d071719d46f4c997a9f0c6776bb9b"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "a2e9eea03974a4c6c494ea15cbfedb02"
  },
  {
    "url": "faq.html",
    "revision": "d072108b8e94b36eb6b5190a4b75f7b0"
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
    "revision": "25ba757235e4862501fdbfa47ecaef67"
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
    "revision": "6bbe9dbc9156666085a617fa612a216b"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "564c232d14239b5f9bbeb7aa313eb77f"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "ba2309e76f98b8184482479c25891784"
  },
  {
    "url": "setup.html",
    "revision": "45991b3a2dfb9a337fed87889f0f6045"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "56fd5fe3a95a118e8ded4795c4b4df7c"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "246314dc2b5fe878dac4528b6b349d14"
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
