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
    "revision": "951d864108859763368b6769ed8e6f80"
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
    "url": "assets/js/17.44596c04.js",
    "revision": "2af4d2859b7eea8b98663303de54aed8"
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
    "url": "assets/js/21.48ee10b5.js",
    "revision": "a1b68f30e16bac360e21f5511a8d7786"
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
    "url": "assets/js/app.de20c8f7.js",
    "revision": "d3c371a2a401ed8ca4c73bb0fffeb15d"
  },
  {
    "url": "bungeecord.html",
    "revision": "569f76a52ab16250ca99ea2a4b071cc3"
  },
  {
    "url": "commands/admin.html",
    "revision": "39d43f66de705701ef0637133b28433b"
  },
  {
    "url": "commands/banking.html",
    "revision": "78493e625a923f96bf312ad0beb253fc"
  },
  {
    "url": "commands/player.html",
    "revision": "75b0ef7e99c6c89650b1f8e0c55241d2"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "bf87fd33ea528b3bbcf6e76726fd05e1"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "d5943c967c36088de4bc77d3bb938eb9"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "e0f205e1325b3b572120fd1e54359593"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f21b6c1b032589b22db44484f360f5ab"
  },
  {
    "url": "en/faq.html",
    "revision": "78a8149997b24f695925dc1fe6783ac2"
  },
  {
    "url": "en/index.html",
    "revision": "59e523e27795e9d014926009f105d26a"
  },
  {
    "url": "en/permissions.html",
    "revision": "8b02022737eb778b77a1017b932a7280"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "65cc11c044af1a9d72ec5758918fd00d"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "20a87fa2e85344fae612a97e15196183"
  },
  {
    "url": "en/setup.html",
    "revision": "4d95aa2d1f5fa1c0fcc2c4619aa70cab"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "08b54fda9b5779b158ffbc4975df411c"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "99294d1fbe29e6bdec98e9a48099542e"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "f8be99d6ca0691774415c4410d4ae0ec"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "3e86d61871033f74fe82a0fb7c284e5c"
  },
  {
    "url": "faq.html",
    "revision": "08cd143689a267948c1d73919b5cc699"
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
    "revision": "a7c5ced7f06866558d97d9d7f30ea323"
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
    "revision": "7040e8035830b07fb4bcfea3a12fb819"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "6bff0fbf6ae7455e5418c826dd4388d8"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "2d4ff80f40b7455bd32eac2ebd2862b3"
  },
  {
    "url": "setup.html",
    "revision": "a547381f9bb49c0d7a6c7b7778e781ab"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "ecc4de17037e17a1ab474964b116a1d0"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "139100548b4ed880ce70027f11bbb241"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "9b251400f92f539e592cb04b7d64b037"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "c17fb47b9f0add15ce831a313bfdb5fa"
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
