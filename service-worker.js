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
    "revision": "a68cd15ea093a15da9ea5f3a1ed41f99"
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
    "url": "assets/js/10.edd73088.js",
    "revision": "3449c8b862e82cee4e97ee3e47d0a12c"
  },
  {
    "url": "assets/js/11.1c514d82.js",
    "revision": "9a1ba56b0c9c0b3bfa9363e6554104b3"
  },
  {
    "url": "assets/js/12.72973021.js",
    "revision": "2641dad4b1bcc3bdfa001268dfbb4f36"
  },
  {
    "url": "assets/js/13.e14cfdf1.js",
    "revision": "35e38324c30420ea9949122e97c473e4"
  },
  {
    "url": "assets/js/14.78332eee.js",
    "revision": "e5607ed4728cde0b7ac08f7915d805fe"
  },
  {
    "url": "assets/js/15.04499a9e.js",
    "revision": "6b411d21497138931a0f2da4ad0259e7"
  },
  {
    "url": "assets/js/16.cadf2196.js",
    "revision": "86d2701f3c964c9c0f252d8fe844a191"
  },
  {
    "url": "assets/js/17.600bb200.js",
    "revision": "83e69d5788f590cdbf0110d2f984dc34"
  },
  {
    "url": "assets/js/18.e6bca00c.js",
    "revision": "5b171fe103bfcdf993d750e090b9a459"
  },
  {
    "url": "assets/js/19.b57903d6.js",
    "revision": "f39a8619578ebf6a2849a5b17dd60c09"
  },
  {
    "url": "assets/js/2.dca99481.js",
    "revision": "481e98910c8efd723e7ab49a04e0f104"
  },
  {
    "url": "assets/js/20.d489e12c.js",
    "revision": "38050c41f698e4f441cc6b041966ae08"
  },
  {
    "url": "assets/js/21.47fadc80.js",
    "revision": "f8a405da90be888ac0219c863086558e"
  },
  {
    "url": "assets/js/22.923ef8f1.js",
    "revision": "3899df60d3e067b639c09567b1e02523"
  },
  {
    "url": "assets/js/23.fc1ff915.js",
    "revision": "a1113716702e8a992a9f95c40bf33d24"
  },
  {
    "url": "assets/js/24.62bb355b.js",
    "revision": "90e0cf32a351543271ffa0765d20368b"
  },
  {
    "url": "assets/js/25.84532845.js",
    "revision": "258aa930314c337c5f2bd4989c1c2f1b"
  },
  {
    "url": "assets/js/26.d259a180.js",
    "revision": "e5ecbcc7e306fff475630ee5248fe1cf"
  },
  {
    "url": "assets/js/27.f90b22b4.js",
    "revision": "6383d324bf1a5ee1b024dfd37d66b7e5"
  },
  {
    "url": "assets/js/28.11a50498.js",
    "revision": "6e944da75254aa101bde9dfbdec24e3f"
  },
  {
    "url": "assets/js/29.bdf618d0.js",
    "revision": "b0cffbe3c39c01cbfeb594b79db5641d"
  },
  {
    "url": "assets/js/3.9ba30a71.js",
    "revision": "9c231e7de1f0eba2e38c03b001fa8eea"
  },
  {
    "url": "assets/js/4.712d41f0.js",
    "revision": "5de65b1343e7cb4cf6724c4f848b7ad7"
  },
  {
    "url": "assets/js/5.8aebdd88.js",
    "revision": "61ddfc1d10696877a065825317c19cc1"
  },
  {
    "url": "assets/js/6.b48d9dea.js",
    "revision": "d9bf7decb87e4adacbf7702f43f785df"
  },
  {
    "url": "assets/js/7.f62df9be.js",
    "revision": "5c9a2cf30e8ab1edb97247c29ea8a70a"
  },
  {
    "url": "assets/js/8.af45e140.js",
    "revision": "12f9ee7c5d0c8354fef2f6c86ebef8ee"
  },
  {
    "url": "assets/js/9.68eab0b5.js",
    "revision": "a89b9895fd6c9f65850801b08009e2e1"
  },
  {
    "url": "assets/js/app.7836dc85.js",
    "revision": "54822541bd77ba7fcd7b5f497112d7aa"
  },
  {
    "url": "bungeecord.html",
    "revision": "e1352f3bfd663677150e9ff3d4676fe4"
  },
  {
    "url": "commands/admin.html",
    "revision": "3f4495723bcb7e375a3290bcd339fcff"
  },
  {
    "url": "commands/banking.html",
    "revision": "f701f6ad44a68faab2c405ab00429f96"
  },
  {
    "url": "commands/player.html",
    "revision": "e9905ffade197e722b3dd3a49fccd53f"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "c1222d88f45cef333d96ffd212fed85f"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "b06fc53bf5023e7acf6f0dd96fbd0d93"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "d1df54f04a1aa09210761bcaae5fc82d"
  },
  {
    "url": "en/commands/player.html",
    "revision": "7a9b37660edc2c428815a32573e827b7"
  },
  {
    "url": "en/faq.html",
    "revision": "5e53d4906777343ce78d80c12519ea57"
  },
  {
    "url": "en/index.html",
    "revision": "53a10004224a7d06ccff135960a32377"
  },
  {
    "url": "en/permissions.html",
    "revision": "5d2607c1658aedb844db393bb6d85244"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "7cb917d45cf7af5296321fc110808d44"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "1ec40834d5d65f6ce7642fbf6f912764"
  },
  {
    "url": "en/setup.html",
    "revision": "b5989043d188707d68aa56b4dadc514e"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "81b226ce106cc3e18d0097e9a73b8bc7"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "1711625b9e540bf17f5e8f80d566b3e5"
  },
  {
    "url": "faq.html",
    "revision": "6163ff2400bbde7cdf0ed2f093196b70"
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
    "revision": "2cdc80b06ee653368d2c9c82fac9737b"
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
    "revision": "7cfb8bcc174290523e51f5db4f313a25"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "5ce3e93fc8abbf72668ad20b6ef4ec4b"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "8e94c172f551179ad8bd8cffc3730e07"
  },
  {
    "url": "setup.html",
    "revision": "b55de4172b6d780e3eed376e1c9ab657"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "453a5b76e69ecadfa0ebfcb89d66bab9"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "b8536dc670ce9dd3b584e81b7f9bf185"
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
