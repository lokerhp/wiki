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
    "revision": "3d16d5b582858f54ba6be33da80b9011"
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
    "url": "assets/img/teleporter_example.63a4bb1e.png",
    "revision": "63a4bb1eb36299bc9a6bd67b71f5e478"
  },
  {
    "url": "assets/img/teleportercmd_help.e314c659.png",
    "revision": "e314c6591270cd7bb2ded9c18a8b2e27"
  },
  {
    "url": "assets/img/teleportercmd_help.f5d0f6c5.png",
    "revision": "f5d0f6c513b401ee9a12261ec42480c7"
  },
  {
    "url": "assets/js/10.3d3a4922.js",
    "revision": "2cf0acbc4188780c2dbd0de95f7a03f0"
  },
  {
    "url": "assets/js/11.5f285b52.js",
    "revision": "7cb7a1c84493c93dc91d0e61f869805a"
  },
  {
    "url": "assets/js/12.0f3f2e1f.js",
    "revision": "f13f8782be519fe681dd2401df48b48c"
  },
  {
    "url": "assets/js/13.64d665c0.js",
    "revision": "267e088b0bcda69b0455f195932da839"
  },
  {
    "url": "assets/js/14.7596f22c.js",
    "revision": "536c8ae45f807bd393189a923f9e6475"
  },
  {
    "url": "assets/js/15.de7a457e.js",
    "revision": "e7f1bcd405929f371bbfd4609852f565"
  },
  {
    "url": "assets/js/16.121735c0.js",
    "revision": "36b533fd77e8e30719fbe1275ac7937d"
  },
  {
    "url": "assets/js/17.50077661.js",
    "revision": "553b3e1f210e39cb01bec0b9ba61ede1"
  },
  {
    "url": "assets/js/18.40a83d02.js",
    "revision": "fcd783e90d6ab3834d9ba843af62f04d"
  },
  {
    "url": "assets/js/19.7bc60fb5.js",
    "revision": "dc42807c729f82a60a790f2b105eabad"
  },
  {
    "url": "assets/js/2.d9ed23c8.js",
    "revision": "d03030a9edc6e2c8691b0daf9f22d237"
  },
  {
    "url": "assets/js/20.56556b53.js",
    "revision": "f9f368e44d97338c91b62997bf368056"
  },
  {
    "url": "assets/js/21.7a733636.js",
    "revision": "ae87e12f9f485d8b18f6d4a6a55b62da"
  },
  {
    "url": "assets/js/22.7a4c96d3.js",
    "revision": "5a942f8fe1186f08e62bf75414d7bcf8"
  },
  {
    "url": "assets/js/23.dca10cfe.js",
    "revision": "a592742d587553b7b6995a0a4ea769f8"
  },
  {
    "url": "assets/js/24.c140c878.js",
    "revision": "cc093bb1ea4f52b5f98158c44cb8c502"
  },
  {
    "url": "assets/js/25.9053e4b3.js",
    "revision": "1b16661a95968314f33475248f8c8292"
  },
  {
    "url": "assets/js/26.1e670cdb.js",
    "revision": "fe803b5e6257bab12046c2cafc9ef4a6"
  },
  {
    "url": "assets/js/27.216c56ea.js",
    "revision": "a09d994dd5678d5bb3c80970b0cb357f"
  },
  {
    "url": "assets/js/28.0767f63b.js",
    "revision": "8f177937f3f10fcbbf9fe383d638745a"
  },
  {
    "url": "assets/js/29.24535d77.js",
    "revision": "8d978f7062f186473c0f457dd63822f2"
  },
  {
    "url": "assets/js/3.3af4843d.js",
    "revision": "be4b13f564fa4599b7011c2b414ade49"
  },
  {
    "url": "assets/js/30.a6f4d2d5.js",
    "revision": "fe3d3a5f347b89a2d3cb139747e6c1d6"
  },
  {
    "url": "assets/js/31.de1fab76.js",
    "revision": "d9bd44d9e019078d8f681caf6580a21e"
  },
  {
    "url": "assets/js/32.bffcf1f7.js",
    "revision": "5bccbe829e00a4637a50c1c10d817569"
  },
  {
    "url": "assets/js/33.e451bd7c.js",
    "revision": "bf9b59f2f41b9e651b0267764b70ef8e"
  },
  {
    "url": "assets/js/4.702569c8.js",
    "revision": "b9baecbee33763e4c6f22d7fd21f4350"
  },
  {
    "url": "assets/js/5.c78d956a.js",
    "revision": "cc334ac50f21280a6398112ab55d9ec8"
  },
  {
    "url": "assets/js/6.516b2271.js",
    "revision": "0de14389e3520c384f228d01a50cd141"
  },
  {
    "url": "assets/js/7.073590d8.js",
    "revision": "fa1e686321907ab4dcde1c2f11b7ddea"
  },
  {
    "url": "assets/js/8.1a988281.js",
    "revision": "7bd0405f3ede3da160291d1cbbb3304c"
  },
  {
    "url": "assets/js/9.a99fed75.js",
    "revision": "18798f2935d76722bd5122bded9c4d09"
  },
  {
    "url": "assets/js/app.3eb78e42.js",
    "revision": "e3aa0d60d39c8eece95617d13226225b"
  },
  {
    "url": "bungeecord.html",
    "revision": "4f4c73464608b1adf8f0ace1f81f5146"
  },
  {
    "url": "commands/admin.html",
    "revision": "7689d02c3f881bea1bb15b9a9653cad5"
  },
  {
    "url": "commands/banking.html",
    "revision": "6ef0d6856663b38d08628cacd69e166c"
  },
  {
    "url": "commands/player.html",
    "revision": "7f34f26605b16ee98e2d873c3d6bec87"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "8bc908c62d4bed80029fd622643173f3"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "e502f88d048eab2d63d3c84c4ca39d79"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "704a27359260d3edfe670dc5969c9c2e"
  },
  {
    "url": "en/commands/player.html",
    "revision": "466f348ee530e5168cb09c1534a0df6e"
  },
  {
    "url": "en/faq.html",
    "revision": "3f06845f0410a712837f27831c9c15f6"
  },
  {
    "url": "en/index.html",
    "revision": "25c118a7bd580045a25ab3fd55cae78b"
  },
  {
    "url": "en/permissions.html",
    "revision": "6f9d6b2a0e31c1e974ca5e5e8ccdea3d"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "7477e6d29e8933b324e2a70ea933e79d"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "d616e36a4c563c93d850313f8d95cea7"
  },
  {
    "url": "en/setup.html",
    "revision": "6a7330e01356770d1d88467d7391fec0"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "c0155158cbd0f9ec4e6150f7a02beafe"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "072c3079356d55713554a1ebeb681316"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "2e2ed6cc1f7214325f548b8b24a6d9c7"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "0fd3d7de27684cb082e0bee69ca2725f"
  },
  {
    "url": "faq.html",
    "revision": "424623080c45796f53585365bba5ee9d"
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
    "revision": "30ce413f4e9663856a663c3cce7ba375"
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
    "revision": "7b224753879c2f955e606d35616c1cb5"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "c27807c1a0c14e725377c03287f2790a"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "90ef609a3ddf748ddd5439557951d021"
  },
  {
    "url": "setup.html",
    "revision": "5169427dab2827c5d75b1f23ae91b634"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "7d6f87bbd176cbda79ea382d169d13ff"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "4265cab30331314b804b24958d0e682b"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "36f1e6578c46ae5ff6d51241543f641d"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "659dcec498e5c3d96428c23cae63b103"
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
