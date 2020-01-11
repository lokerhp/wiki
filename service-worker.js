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
    "revision": "352e2cb3c034f8f29ea5e64ccc9ce605"
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
    "url": "assets/js/10.549d118f.js",
    "revision": "1f8eb0432b527057c70fbfb752d71a88"
  },
  {
    "url": "assets/js/11.06736b8a.js",
    "revision": "1e3135eb68385db549216128f951c0a7"
  },
  {
    "url": "assets/js/12.02e0661f.js",
    "revision": "54e011c21ff4fee43189cd512cffff52"
  },
  {
    "url": "assets/js/13.0e184a96.js",
    "revision": "ebc44c6f65cf5e4fc2c7301b739350fc"
  },
  {
    "url": "assets/js/14.51a5ec96.js",
    "revision": "781e9dc84cd7edc82bd36445dd5df69c"
  },
  {
    "url": "assets/js/15.f4af595b.js",
    "revision": "f4b9b5aa87fedb99b8695ffc71d28591"
  },
  {
    "url": "assets/js/16.3abbd59b.js",
    "revision": "8da5c9705c8f8cea645ff25ff1493505"
  },
  {
    "url": "assets/js/17.27b47bab.js",
    "revision": "b12a6b4cd2696ae746f2a2f793eb6374"
  },
  {
    "url": "assets/js/18.11bc6dc1.js",
    "revision": "a322696b887036da71675d5d66dc4c01"
  },
  {
    "url": "assets/js/19.b8b83926.js",
    "revision": "ca935f847e8d7ef8ea9827337d66f435"
  },
  {
    "url": "assets/js/2.5efd51eb.js",
    "revision": "75d6226184d06258323cc15a58652045"
  },
  {
    "url": "assets/js/20.b19347d2.js",
    "revision": "023b5db740b2cde1a013d140da63e63e"
  },
  {
    "url": "assets/js/21.89141863.js",
    "revision": "406a92f60c507c851d11787d10fd7386"
  },
  {
    "url": "assets/js/22.bc9bbc16.js",
    "revision": "42fb4cb2dd46ce9829b417676f3303b0"
  },
  {
    "url": "assets/js/23.91ce7731.js",
    "revision": "bf7dbe1a8c16dd45e6201d5af089b187"
  },
  {
    "url": "assets/js/24.80309b48.js",
    "revision": "6203beebf9506d008d89f805e90c00e7"
  },
  {
    "url": "assets/js/25.e43873fa.js",
    "revision": "7d4081c48356bc31344d5f108bb0d625"
  },
  {
    "url": "assets/js/26.420c13e6.js",
    "revision": "cef41d89344f7894e884888cd84530e5"
  },
  {
    "url": "assets/js/27.77a4c7b3.js",
    "revision": "859de47f5c506737f3055de7d9bdcaa6"
  },
  {
    "url": "assets/js/28.d7242ef1.js",
    "revision": "13b3da556f895e819f6a1178ae9acb7a"
  },
  {
    "url": "assets/js/29.bdf618d0.js",
    "revision": "b0cffbe3c39c01cbfeb594b79db5641d"
  },
  {
    "url": "assets/js/3.9656f673.js",
    "revision": "a41467f97f7a8659dea42de89ad3b527"
  },
  {
    "url": "assets/js/4.6782b409.js",
    "revision": "533b578e6003e849d003d8428f0b2e9f"
  },
  {
    "url": "assets/js/5.c6808b58.js",
    "revision": "1258ea4fe7c37fcf4c5d97de340ce623"
  },
  {
    "url": "assets/js/6.745ba401.js",
    "revision": "6c0dae0ec41069712d8bb56e2fcf57e3"
  },
  {
    "url": "assets/js/7.874c8772.js",
    "revision": "4fa49fa51d92b6dd4c00cd0481506bf3"
  },
  {
    "url": "assets/js/8.620b4a00.js",
    "revision": "1c04a13c1ee9f4b3e47f6589c78ebd82"
  },
  {
    "url": "assets/js/9.6026286b.js",
    "revision": "ef5a6814783a09be29a28ed1ea890653"
  },
  {
    "url": "assets/js/app.080898a7.js",
    "revision": "ab4405bf61e416bea0dfe01cb5766856"
  },
  {
    "url": "bungeecord.html",
    "revision": "4a6b931030a6192df767d0f8f6e95dbf"
  },
  {
    "url": "commands/admin.html",
    "revision": "e815587dcf64edaedd664b097bc7b1c2"
  },
  {
    "url": "commands/banking.html",
    "revision": "2f980c9e19b69d0340721160ea6acc5c"
  },
  {
    "url": "commands/player.html",
    "revision": "ae0c1240ef8f93dd0fe9a0827d4ff1fe"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "18be85e2af5506427dbaa2ef109394b5"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "79a3b77b1c82988aa1f19dc716084a84"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "2d1702b329d311778a9901b7b06b8748"
  },
  {
    "url": "en/commands/player.html",
    "revision": "5a5093704f4b078aa9f385549ab195e2"
  },
  {
    "url": "en/faq.html",
    "revision": "b23c20bdb926c9367c0a321e8f269e16"
  },
  {
    "url": "en/index.html",
    "revision": "a585e55d0317b3f5065a1b524d935c03"
  },
  {
    "url": "en/permissions.html",
    "revision": "925c3f2400d9b5239a3e756c53e2cd82"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "28191c2eb5d4ff2351b8fe9f2e52de1d"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "de38f1a028949de220e24b6e232aeeca"
  },
  {
    "url": "en/setup.html",
    "revision": "193347bc4751c8a3caf5f64acdafdbb9"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "9b7e8fc0b9cc6d269a83e15410756ca7"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "6a0a8b9437a9b98c3c47748875c7ed6c"
  },
  {
    "url": "faq.html",
    "revision": "d90c593fa5a2d836f13064e29aaeff3b"
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
    "revision": "7b13572c5e1bb4923f292778b6f29177"
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
    "revision": "da3aa6059bf2a395862e5f22b297953e"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "9170a35ad3772c2cfbac2d3241ce919a"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "d599a6047b439f11a5254d2f38a0d19a"
  },
  {
    "url": "setup.html",
    "revision": "79a5b6746a83edabeee03cd0e141f71a"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "7c255f2f815f9b5f8af5118b41b07b42"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "6e40be50c8171f19c5f2e7a63cc9353e"
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
