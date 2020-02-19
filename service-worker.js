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
    "revision": "b400d3642bf981683ee9a3e16c0c8cf1"
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
    "url": "assets/js/11.5dfc2bf2.js",
    "revision": "68dd028c3b388106d4eb0a135586a105"
  },
  {
    "url": "assets/js/12.ff65f9cc.js",
    "revision": "4776ae38de99362d7666d14ccd07142f"
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
    "url": "assets/js/15.fef167bc.js",
    "revision": "04e48782ba16a8367a6199065d15ab77"
  },
  {
    "url": "assets/js/16.cadf2196.js",
    "revision": "86d2701f3c964c9c0f252d8fe844a191"
  },
  {
    "url": "assets/js/17.1e51bdde.js",
    "revision": "18c912417b427c091c549c4c3caae3ec"
  },
  {
    "url": "assets/js/18.c781bc1d.js",
    "revision": "eb9db288e05045e821228010a5b2bc55"
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
    "url": "assets/js/23.e7c02715.js",
    "revision": "e4e39e65fe0fb6bb14ad356b28e4efc0"
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
    "url": "assets/js/28.caf82738.js",
    "revision": "d7f52b1daa6964a8445b16b1aafcaa30"
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
    "url": "assets/js/app.436dc783.js",
    "revision": "1c47b28b1b8e89a4485c5dcb8e56ae46"
  },
  {
    "url": "bungeecord.html",
    "revision": "cf90777823c75fb1f9bbb91594e0f936"
  },
  {
    "url": "commands/admin.html",
    "revision": "e16e7e3886455c897695fe638c12cbac"
  },
  {
    "url": "commands/banking.html",
    "revision": "a4f38aa2e7e8c3747645420e61964741"
  },
  {
    "url": "commands/player.html",
    "revision": "e0b5656742ee4240ae13c50174116448"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "31047360a138e920baa5b5e7a3c6ac98"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "d622220d69269935f1882575a9703914"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "71bf713f995fe64c91aa414e7512b39f"
  },
  {
    "url": "en/commands/player.html",
    "revision": "38397b4f02d9a08d231077d21f1bc53c"
  },
  {
    "url": "en/faq.html",
    "revision": "ae9e039082ba0a584d09ba180cba5851"
  },
  {
    "url": "en/index.html",
    "revision": "cb377ba0f10a82e5b5e3c4bce243277e"
  },
  {
    "url": "en/permissions.html",
    "revision": "6974f58c4262c6bf591187b1c2809c36"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "e0b7719ebce63383de53355cc455377a"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "ea482d170f5b6d8562d86c445a935de6"
  },
  {
    "url": "en/setup.html",
    "revision": "37cfdec2a43768e3b52d941e1752e739"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "dedf246598cb6967b6004144b0d62cb4"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "6cbe43cc0b2272a28720ee46daa95726"
  },
  {
    "url": "faq.html",
    "revision": "608e840d8fca017b1718d16495891d93"
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
    "revision": "e573a6df2beaa59b12baab3180713f68"
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
    "revision": "104b25bd37a110af2ed52e31c3922ed1"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "f0fa7fb7148aeab482a4dc6f465a3b60"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "41cc569fad9ef99e9902b36c913318f7"
  },
  {
    "url": "setup.html",
    "revision": "60714d8d8a1a691ac38b3a17bbea6ed4"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "565899e6c11aa30fb79dc37d068a8cac"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "c2a4782a3f4839bf4c74bc5578bdbe80"
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
