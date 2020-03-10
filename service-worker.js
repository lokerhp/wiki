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
    "revision": "ee0063d104eae124184e8fde50d303ea"
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
    "url": "assets/js/13.9fc3fbf3.js",
    "revision": "06db55745d5d03612c3ac660f5e0a3fd"
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
    "url": "assets/js/25.7d8c663c.js",
    "revision": "28a22fc7a42d0c2bf9a9e8699a868466"
  },
  {
    "url": "assets/js/26.bb07b14b.js",
    "revision": "c65fe81d391a6c56d8ef85e150db9665"
  },
  {
    "url": "assets/js/27.bc1f2838.js",
    "revision": "e51ba248c95039efcf2c6b7c2ce4a96f"
  },
  {
    "url": "assets/js/28.dfc05df9.js",
    "revision": "9e0ce9e21e9aa2a90d707aa4ca99f07b"
  },
  {
    "url": "assets/js/29.b51fe10b.js",
    "revision": "58f14aa5992b725b53ebcb64640e55ac"
  },
  {
    "url": "assets/js/3.cb0aa770.js",
    "revision": "bb10860d6f5253a56aad7c1ed6853c94"
  },
  {
    "url": "assets/js/30.43568e40.js",
    "revision": "a382774969e579bed3a619872bc61561"
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
    "url": "assets/js/7.31db9f0a.js",
    "revision": "fd5319e8bf0358cbcc5833a497fbb9c2"
  },
  {
    "url": "assets/js/8.af45e140.js",
    "revision": "12f9ee7c5d0c8354fef2f6c86ebef8ee"
  },
  {
    "url": "assets/js/9.4759901d.js",
    "revision": "0f07ca54a0f23dcde2fee0f5f4ab7058"
  },
  {
    "url": "assets/js/app.c4efc253.js",
    "revision": "189451b58bd7fb9cc91049dbf4123b87"
  },
  {
    "url": "bungeecord.html",
    "revision": "de18a44c16044507dcc33f9505e5df4c"
  },
  {
    "url": "commands/admin.html",
    "revision": "9300ed1818e0ecc2f12735866e92ae05"
  },
  {
    "url": "commands/banking.html",
    "revision": "cffcfe54b7f22611d898921ba6bfb8c2"
  },
  {
    "url": "commands/player.html",
    "revision": "f6fe1b79438a606502a46e1464270892"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "366d91afbdf82177d19de8c84ce43d41"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "b8e676b1a956f6ee7326bf9fdde621af"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "824454eea9a06e602e4df2da7c2f3418"
  },
  {
    "url": "en/commands/player.html",
    "revision": "88388a460f01cd24d4b79927f2bbf9df"
  },
  {
    "url": "en/faq.html",
    "revision": "9ab9101f08a69595f7d2b4c4b5e506db"
  },
  {
    "url": "en/index.html",
    "revision": "3e5cef06c157d4a5814805c1f2bbfb51"
  },
  {
    "url": "en/permissions.html",
    "revision": "87a58ec568bdf9f8c0104962d27b7a8e"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "eacadd1217939984cbb4d325aff7eba6"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "ccb2de2f86ee3199d15b211ded6dd87b"
  },
  {
    "url": "en/setup.html",
    "revision": "72df0ca7c90f5d4aafc035a9fdc262ca"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "ddd664089c4d76a517c6cc626dde48ae"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "77ead69f700ec422b2cdedb523aa5d54"
  },
  {
    "url": "faq.html",
    "revision": "d5249fa9395270a0f01eea86433e35f8"
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
    "revision": "af1234aa3eb80ac6f692229ed5bd7b9a"
  },
  {
    "url": "migration.html",
    "revision": "bc0a301319e9667eae4b89296805eb07"
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
    "revision": "b48e702a817a29f2e98e8c954e96a4b7"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "2ad7e760b559fe04098ea16b59d62ba2"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "5aad6d62dc8052253cf6e8c74a94a972"
  },
  {
    "url": "setup.html",
    "revision": "456f5f8af73585164724d72b0101b091"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "7cfee6a87c1ec4f2148a1bd1db475aab"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "641591dc8e320059f4aa658480b792f5"
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
