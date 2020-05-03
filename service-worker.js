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
    "revision": "d424b4ffca55615e9ca0f48c3df6f5ce"
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
    "url": "assets/js/17.2ed334f6.js",
    "revision": "00f1fcb68724ad6afafdd3cad486ba04"
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
    "url": "assets/js/21.f996bf66.js",
    "revision": "98b3d5fa53670e620c9f5da74924e415"
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
    "url": "assets/js/7.44a9ca78.js",
    "revision": "232112d4d1ea034575052473b345d706"
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
    "url": "assets/js/app.3e329927.js",
    "revision": "2b850ead64649e73d8f0faa322bc5bbc"
  },
  {
    "url": "bungeecord.html",
    "revision": "c391a2da8ecbe91c7d9fdf692bf26cdd"
  },
  {
    "url": "commands/admin.html",
    "revision": "6694d4e44aa5676d9a79bb71a992d153"
  },
  {
    "url": "commands/banking.html",
    "revision": "30a46213fc6e2cc17c0c81cfa4bdeb7d"
  },
  {
    "url": "commands/player.html",
    "revision": "ed553b3d6dc00770d8c284cad8c769e3"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "cb024c6e4fb554f1b7ada98ccbb5a28e"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "b8a59b29fc15be7294885d559a8c7557"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "b2dfd84a725650904fcf787e7330c906"
  },
  {
    "url": "en/commands/player.html",
    "revision": "6380f3be8da2f9b65710665a5b5807d1"
  },
  {
    "url": "en/faq.html",
    "revision": "85060c826256f2b7ad8f1f7ad12f3524"
  },
  {
    "url": "en/index.html",
    "revision": "3b655f2e47bddad149c046a375bbd543"
  },
  {
    "url": "en/permissions.html",
    "revision": "6b900b8afd80b509b23fd96af3b44083"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "451ade9578ff185e2e36e2c251562c21"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "ccdb51f305489b58b3173971275fd45d"
  },
  {
    "url": "en/setup.html",
    "revision": "80a9cf9da774501a0b737d64e750fe9b"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "ba8b656f202077b525b7864be0922079"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "5ea8470aab8a907597b35c8411499dac"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "90f09635344a2ee3bc603fdb7845e407"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "d716332955469917e22cd6d25c4816e5"
  },
  {
    "url": "faq.html",
    "revision": "7a9cf7f0ea82eb483d2aa1011769cae9"
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
    "revision": "fd6c9f23e5b374613e95e7b680ca1a00"
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
    "revision": "364b8452fdc1d0ef48befc49faba6daa"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "6218898fbc6a03667d0375a14c62f2e0"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "fe5d18a1bf1030dee3c1ba5d93a79fb9"
  },
  {
    "url": "setup.html",
    "revision": "865e5c672329bcb07fd388a58aaa9c23"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "8ee53b8d7bb74a6fbd533fa5db0fbf0b"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "ece6818ce9d7bec8c5ca8926f8a985d9"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "600a23a2ad0e3e86c582069ae04c9a38"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "23a58fca327a7a5db4f20bf543ff492a"
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
