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
    "revision": "391cd9818025cd1ce5865a6a6a41512b"
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
    "url": "assets/js/23.dca10cfe.js",
    "revision": "a592742d587553b7b6995a0a4ea769f8"
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
    "url": "assets/js/27.b94e701f.js",
    "revision": "f6e9b40617998563a95ead45f5c19fd8"
  },
  {
    "url": "assets/js/28.99e4a86f.js",
    "revision": "1c3b39c879e7ce3166b2a0a8dbea7777"
  },
  {
    "url": "assets/js/29.295de5d5.js",
    "revision": "fffc700cdeb502ef8f599b68f72c0178"
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
    "url": "assets/js/32.e698167d.js",
    "revision": "5dbc6d29d6048b1e0dbd2d81c29dc22f"
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
    "url": "assets/js/app.16dce597.js",
    "revision": "d319b14c4cd323374e9f24c0ec3e88b7"
  },
  {
    "url": "bungeecord.html",
    "revision": "c7d17f17939d7c7a9bc8925a599b186d"
  },
  {
    "url": "commands/admin.html",
    "revision": "7d272e2e072ba65a85b0c23c3e752859"
  },
  {
    "url": "commands/banking.html",
    "revision": "26e14029e1dee94f3099d48d4ee31139"
  },
  {
    "url": "commands/player.html",
    "revision": "c26b5f6b3dc6e94bec19b29478ec459b"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "64627811efcb51ab084fe4dbff66435d"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "833218b270698dc8034e3313a97e8090"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "6eba1027353532f7a929622e0068c3d7"
  },
  {
    "url": "en/commands/player.html",
    "revision": "725e40dd7e547ff082e7659d11bf838c"
  },
  {
    "url": "en/faq.html",
    "revision": "bee07ccec2a61ae7871c3e1fd6be2160"
  },
  {
    "url": "en/index.html",
    "revision": "5a1938d82cc3fa3e90fcd41b7513457e"
  },
  {
    "url": "en/permissions.html",
    "revision": "c8a7931200a644feb0739f3972023550"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "eca3ec1fa6ad9ec5edd273810140e770"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "5ddbb05f6418f03a7fa822271a9117ac"
  },
  {
    "url": "en/setup.html",
    "revision": "9d15dca150704f6437642de8e6cf715e"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "b7eca2b18276e31cf22e09132395602e"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "69dbe41c7a9974467f07a03fef5aa8e0"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "2b58a5f8ce1c8ae171c5b0f951e0ce06"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "57941bc4a8ccfc2a33b6bf70ea859467"
  },
  {
    "url": "faq.html",
    "revision": "da06fe533cbcb70f6fec56a8bd90ace0"
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
    "revision": "6fd0e0f795ef42f586f979e1da3d499c"
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
    "revision": "9c493ebb46512e21cd6d91a294b2a3ed"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "ca36b5884add3251dd468d8d49c5f0ee"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "dc83df9cc213e51446c19a31f35d5a6b"
  },
  {
    "url": "setup.html",
    "revision": "00c62828c604e3de98e78b09e7de22b4"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "0db108ea4639063fedaf63f83367ab81"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "78a0d88df020dcc4c6a1dd13df6f6ddb"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "46870a8b697191f5a3606ce02b1168c0"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "ad1eb0350d772c84d24a34ec089173de"
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
