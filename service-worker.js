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
    "revision": "65f492d95df42b384502d6cf0319f8d7"
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
    "url": "assets/js/10.1679eceb.js",
    "revision": "9e80056bf6c74c1de766cbaacfb395d9"
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
    "url": "assets/js/18.ef94953f.js",
    "revision": "7171bba728a574a69f76d266eef77e0d"
  },
  {
    "url": "assets/js/19.5ed5b14e.js",
    "revision": "19733211a99b59352faf64bf65095e86"
  },
  {
    "url": "assets/js/2.5efd51eb.js",
    "revision": "75d6226184d06258323cc15a58652045"
  },
  {
    "url": "assets/js/20.692d54e5.js",
    "revision": "3fbcc3a4d2cb2ac3180674dadf06b614"
  },
  {
    "url": "assets/js/21.5725ebf3.js",
    "revision": "4cbb96a5baa466da2966720a03c1d904"
  },
  {
    "url": "assets/js/22.c60c6072.js",
    "revision": "00f287762d17f8b25359ad29632e72ea"
  },
  {
    "url": "assets/js/23.25d492f5.js",
    "revision": "90761871bbd58e4228da23147cb1d52b"
  },
  {
    "url": "assets/js/24.3d7f6422.js",
    "revision": "56240b6a32bd6e46081b4ddffc5ea51d"
  },
  {
    "url": "assets/js/25.26c1a732.js",
    "revision": "2b1e41047882ae0788abede1b2a9809f"
  },
  {
    "url": "assets/js/26.429f8ee1.js",
    "revision": "81cf47e835bfb3b1c436c849b7bb8ab2"
  },
  {
    "url": "assets/js/27.fb7ab712.js",
    "revision": "db9d629123d193fbf98d3ece382f5610"
  },
  {
    "url": "assets/js/28.3e463fbf.js",
    "revision": "c2c68b9bfe219836064f31961bbbd77d"
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
    "url": "assets/js/4.ca31839f.js",
    "revision": "49cefeac511599a3c6eeff668f5cc223"
  },
  {
    "url": "assets/js/5.c6808b58.js",
    "revision": "1258ea4fe7c37fcf4c5d97de340ce623"
  },
  {
    "url": "assets/js/6.82e5a484.js",
    "revision": "fa1175ae741ec1097626ff19d2137288"
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
    "url": "assets/js/app.feca9ef3.js",
    "revision": "9ef8f32af23dd9894794552846fb310b"
  },
  {
    "url": "bungeecord.html",
    "revision": "7b90df223616a48dbafab4d599b6e16c"
  },
  {
    "url": "commands/admin.html",
    "revision": "480c43b16cf05a74d6a92076fa6d73fb"
  },
  {
    "url": "commands/banking.html",
    "revision": "7ca09028dc0cebe58cbe27adb69bfc77"
  },
  {
    "url": "commands/player.html",
    "revision": "c0425f23e4103d81b7af3ec9528767e5"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "1cfd1c39aa8414988a80decc7aca840f"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "d75330e9fa0a06c6ec77c25c7cd4beb1"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "3b0186fa96523e44addc5c0e08860305"
  },
  {
    "url": "en/commands/player.html",
    "revision": "2a00fc7400dc33b2b4d074792e79bb52"
  },
  {
    "url": "en/faq.html",
    "revision": "3ad81bddb4fe91ed9f2a96cb824e2ae6"
  },
  {
    "url": "en/index.html",
    "revision": "af1fec59241ee8ce948d2d9f71190ca0"
  },
  {
    "url": "en/permissions.html",
    "revision": "9c9f03dd02e24f77a18ef5f788b21ef3"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "da7153bdf2e2befb516d08147cdcf777"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "71105385618f7f7da156eb3536d2c3e0"
  },
  {
    "url": "en/setup.html",
    "revision": "74667d663778a528a12bbaad27fbae94"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "13e96a7e744d9e40cf05b30e7b3605f7"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "38ceea26fdd9577dd7b326d88cc65278"
  },
  {
    "url": "faq.html",
    "revision": "5fd1b153c397aaa15a7bbcb099497936"
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
    "revision": "47edcb2d2c0e9519671f0cf88d485440"
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
    "revision": "59c95eacec7e48bfe5d2ddbe02de1091"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "c92d441411272b2653196935bf7f2bb3"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "7aceb10fbe554fdfb8394737a77111bc"
  },
  {
    "url": "setup.html",
    "revision": "91326aebea3871dd06c3d83518cbf166"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "810efe5a2ae9cb07eb3e2b202b0160d7"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "977be04e157a9454fef5666f6dddcc51"
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
