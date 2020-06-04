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
    "revision": "7ed6a7866c7e92236534c7d8b4822355"
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
    "url": "assets/css/0.styles.c763cc1d.css",
    "revision": "02500198b3b42b11436ee17578d3ec9b"
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
    "url": "assets/js/12.f8574f1a.js",
    "revision": "6a9f5151df78d54ccddbd58f4f031ddc"
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
    "url": "assets/js/18.b1030f14.js",
    "revision": "2838c34cd2b33eef7c28e21b7e442a39"
  },
  {
    "url": "assets/js/19.7bc60fb5.js",
    "revision": "dc42807c729f82a60a790f2b105eabad"
  },
  {
    "url": "assets/js/2.beaa6d96.js",
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
    "url": "assets/js/22.640784f6.js",
    "revision": "5b5c6378edf62221ce9537a1dd44ad38"
  },
  {
    "url": "assets/js/23.9ff31259.js",
    "revision": "afbf557d124a305e82a1345f307b4021"
  },
  {
    "url": "assets/js/24.b2b7eccf.js",
    "revision": "c58e51fdb9b5aea8f7091c4fe36810a7"
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
    "url": "assets/js/27.6e2ccebd.js",
    "revision": "76b0da0c5455ea7f00471b38cf0d82ab"
  },
  {
    "url": "assets/js/28.a2509748.js",
    "revision": "5c3cfbe2f97a226b3611b98d75820c5c"
  },
  {
    "url": "assets/js/29.dbf603e2.js",
    "revision": "33d84c2fd34b514c61eba826bdecb4b2"
  },
  {
    "url": "assets/js/3.3af4843d.js",
    "revision": "be4b13f564fa4599b7011c2b414ade49"
  },
  {
    "url": "assets/js/30.36e3bab4.js",
    "revision": "ae53be10b4ce7f6334c9e7ec299acab8"
  },
  {
    "url": "assets/js/31.2a071521.js",
    "revision": "7af1d7ff563a1afc46eeca5563ec1d39"
  },
  {
    "url": "assets/js/32.a4d2fc71.js",
    "revision": "043cb3a678eec5e8c3465b59d0638905"
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
    "url": "assets/js/6.4b221683.js",
    "revision": "923c34ec9d67c7e5b63a157905859b5a"
  },
  {
    "url": "assets/js/7.073590d8.js",
    "revision": "fa1e686321907ab4dcde1c2f11b7ddea"
  },
  {
    "url": "assets/js/8.dd65357d.js",
    "revision": "21b3c770b55c4bda4c1c4027a8169200"
  },
  {
    "url": "assets/js/9.a99fed75.js",
    "revision": "18798f2935d76722bd5122bded9c4d09"
  },
  {
    "url": "assets/js/app.ca3ebcae.js",
    "revision": "d3a27f99debde1f7c52f33c25cfee31b"
  },
  {
    "url": "bungeecord.html",
    "revision": "adf85f1f667e59f9b59ba8dfa5c03189"
  },
  {
    "url": "commands/admin.html",
    "revision": "62abdeeb41980ca697debb2e5272810c"
  },
  {
    "url": "commands/banking.html",
    "revision": "19890bd1c0e85e0c12b83de1d013ba5e"
  },
  {
    "url": "commands/player.html",
    "revision": "3764ab7d525808833b499b432d43f954"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "02354cc4d8db008209b9f03f5ee4d34f"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "f4ac4b8b40536b823c3d3bdd611530f5"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "7f4d4bfb659c544f5b75e81a0d2f4ee3"
  },
  {
    "url": "en/commands/player.html",
    "revision": "9f4d8641179d3708bbb9c042f0f3882f"
  },
  {
    "url": "en/faq.html",
    "revision": "046634a14bd45c373be24be7d4509d60"
  },
  {
    "url": "en/index.html",
    "revision": "9ed27c8a32f04231c59cc8622d8d90bd"
  },
  {
    "url": "en/permissions.html",
    "revision": "aa1294f95574c40c794ab92000edc713"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "6fadac6901fe8e0e59ee966378562754"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "be46870c2e1758da7da092078e62cfe2"
  },
  {
    "url": "en/setup.html",
    "revision": "b1db88e5020f08eae3387824cfffce10"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "367c02e3ba081c6f15d22a2e52589bf7"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "4dd98a5f26f7fefa91e83fcf434e18cc"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "a823a83415b0a21254b4cc669f90a196"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "12e20978caf28c349d7c42ccbf35d9ff"
  },
  {
    "url": "faq.html",
    "revision": "d866674958adbcf8445c90c30c556984"
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
    "revision": "d6b7f050a737804caf0bc3d1f4d1426c"
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
    "revision": "60f3a4c62935626aed0a5f32ac69a22b"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "b86fc82887f8071f9eec09ca499b6136"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "a19cb26aa132406ce21312653cbb0414"
  },
  {
    "url": "setup.html",
    "revision": "077c5472db7afee5610f0ab0e69933d5"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "e1d9040010655a18ee38a07f84acf877"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "038b0b3ec480c8f23e9ec08e167bc0c3"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "cc889714c759dd6647a4378de21a0551"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "60ecf6fbe41e9436bf8beaa99ac8476f"
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
