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
    "revision": "9a6d7e3b0840d7d57bc888d7908f81a5"
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
    "url": "assets/img/teleportercmd_help.6d903b2f.png",
    "revision": "6d903b2f0ab151dfc1f034d4c68f7c46"
  },
  {
    "url": "assets/img/teleportercmd_help.915d51ea.png",
    "revision": "915d51ea52c009095db34609cec6e14e"
  },
  {
    "url": "assets/js/10.3d3a4922.js",
    "revision": "2cf0acbc4188780c2dbd0de95f7a03f0"
  },
  {
    "url": "assets/js/11.b222c877.js",
    "revision": "18a3c77ec415d026a36398823573a6fb"
  },
  {
    "url": "assets/js/12.0f3f2e1f.js",
    "revision": "f13f8782be519fe681dd2401df48b48c"
  },
  {
    "url": "assets/js/13.f732f199.js",
    "revision": "88355ee679123f1302bb690374c8bbda"
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
    "url": "assets/js/17.19b4d0f1.js",
    "revision": "02245e10c97bf4a97c93d24c44ea8491"
  },
  {
    "url": "assets/js/18.eaacae7f.js",
    "revision": "fe54d4e861b1e0971c906f9ef6fec57d"
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
    "url": "assets/js/21.30bfa5d8.js",
    "revision": "91cbf717ad1ab647715d2d3802c84afa"
  },
  {
    "url": "assets/js/22.084d1623.js",
    "revision": "da4bd14fc6807e4d7e8d50527ac7ba1b"
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
    "url": "assets/js/27.ce6867d0.js",
    "revision": "986cd4cd0ba733dd94ba741a51a52c5b"
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
    "url": "assets/js/32.3fb9e01d.js",
    "revision": "fc288f66926ea68e12e75e95ee1012cf"
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
    "url": "assets/js/7.eae0fef8.js",
    "revision": "9246c3d151d38051dd5c5d441d59ce97"
  },
  {
    "url": "assets/js/8.1a988281.js",
    "revision": "7bd0405f3ede3da160291d1cbbb3304c"
  },
  {
    "url": "assets/js/9.ad74af8e.js",
    "revision": "af364740448502474c73444da29ec16f"
  },
  {
    "url": "assets/js/app.fd94bd63.js",
    "revision": "e2a6184b39504e58e14226bfd3ec0d50"
  },
  {
    "url": "bungeecord.html",
    "revision": "f132a13ac2cdae1222253e876e4c9308"
  },
  {
    "url": "commands/admin.html",
    "revision": "9fa979cf0b59ea371fbf8ddbcd58d744"
  },
  {
    "url": "commands/banking.html",
    "revision": "2456ababe11ce0f6e984a394d6e5499a"
  },
  {
    "url": "commands/player.html",
    "revision": "26d9b28905e68745c42121f1032b6d69"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "7dedac97310078e0636638fc33bcb558"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "8bf3ee4048a433c82880e4ae3e0440d0"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "5ececafb16aafd3677bab99a85994dd9"
  },
  {
    "url": "en/commands/player.html",
    "revision": "710cf8fa2ce2f31645a36d0129e2df99"
  },
  {
    "url": "en/faq.html",
    "revision": "dc3db5321ed34fd3fe531356413341e2"
  },
  {
    "url": "en/index.html",
    "revision": "6ff15bddde8ed0ed8f90b438f646748b"
  },
  {
    "url": "en/permissions.html",
    "revision": "edbbe88555a9e2ea6f30d50e66842f1f"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "035f8a155dc66aa7004cd04b8fa5c58f"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "71c5d78fd7840d9f68742416eb507cc9"
  },
  {
    "url": "en/setup.html",
    "revision": "7a919d6e4a5bef5f77225cf7df4637c5"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "c75b51d75265d4b32284a39d86248d35"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "af134d0744c02bffcdff354360f79b11"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "8ff5340f09eafa95180869d5ce87c448"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "a474bbe68d1fe434ea6343c360dd3a16"
  },
  {
    "url": "faq.html",
    "revision": "2867a39892e230c85bb922f59285255b"
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
    "revision": "1f78adf26a0c5ece8e13ff806c4491c5"
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
    "revision": "4c47db000eb60cb34778cb1d7f0d3312"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "0bbae6851e0e672b02ee72bc9918ab4b"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "55c5991d10c8a65d20e6f1257e2037fa"
  },
  {
    "url": "setup.html",
    "revision": "3486282a0bb5a9fccaa1c934050bce21"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "416aeafd5ae723697d7bd37e096d0c38"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "0cf30bc0d059632f420171374147c179"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "55b3bb470cf424c9124573b878c7c12c"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "a4d9d3fde1a27a98f465fc44d325b868"
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
