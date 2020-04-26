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
    "revision": "3aca15bbf52b6a3b0ceb6e6f8010649f"
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
    "url": "assets/js/10.9d445227.js",
    "revision": "f28f4d856af28a1f06a60fc6980db75a"
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
    "url": "assets/js/17.187a5098.js",
    "revision": "30afc747bd887f99e6ddc5a6bd6a5151"
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
    "url": "assets/js/21.843d122f.js",
    "revision": "94b929697c0f63906674cb18491a7264"
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
    "url": "assets/js/7.d5e2f88d.js",
    "revision": "81d0dce17c0ebb6dda4f3e4cc12b80d7"
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
    "url": "assets/js/app.30fecee9.js",
    "revision": "e3dd2d3f34c842b7f9840f03b91ed4de"
  },
  {
    "url": "bungeecord.html",
    "revision": "c8b173c62c6c0e61f7b74b57173cc524"
  },
  {
    "url": "commands/admin.html",
    "revision": "c22380e90a159440f3612d40c9011950"
  },
  {
    "url": "commands/banking.html",
    "revision": "45b72a678bb564daed61d828cc5839fc"
  },
  {
    "url": "commands/player.html",
    "revision": "e77a54aa812fefc28ef41a2887f423bf"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "4070558da6cf10af612ab23fbb4fb066"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "968a876e8c893d70ffc1100234716e79"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "0e958e595281b44933157fbf8d840f86"
  },
  {
    "url": "en/commands/player.html",
    "revision": "d61c69b67825e95bcc145ea4acd7044f"
  },
  {
    "url": "en/faq.html",
    "revision": "dc7d8322ac394f1833642b982bff627d"
  },
  {
    "url": "en/index.html",
    "revision": "9af1322b76f2cbd7dd0fe38ca53508e4"
  },
  {
    "url": "en/permissions.html",
    "revision": "50938b3f4e2bceef99ba5cfacd8b79bd"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "df5b479d847fb8876e3d177bce0a95f7"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "b6606be6431cf17927c2c7b893f8fc2c"
  },
  {
    "url": "en/setup.html",
    "revision": "3c3488cdd55ec387cd1c10a8890ee99f"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "df0f18a85909e9b1f510ea7493da417d"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "a7e9fe112b5befdf50b27eb5e8b8fe6d"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "553db046e30b57a5264c41cd11126e14"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "6e2f07f9f023a3a1d6d0ad2fec16acd8"
  },
  {
    "url": "faq.html",
    "revision": "ad7c594324d70d0542f69893b47119aa"
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
    "revision": "fa7cb2d5b018b0030deb30a5f3403123"
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
    "revision": "f636524f4b29c04ae4d8c07582acdc71"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "3f94e492c314242d1f1b9bc9f0b6b05a"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "103f1b7d7df5b46d6beebb9f2ab452bf"
  },
  {
    "url": "setup.html",
    "revision": "515feb8e043c3caabfaf774794ea81ff"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "260c5e566818aeb47239843935897606"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "2e462fa9ebd4c4cda98257983ad4eb22"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "91f1b356cb29bae38e4806f624122ee8"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "83b90e0797d2724d6a6399ed7301e48e"
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
