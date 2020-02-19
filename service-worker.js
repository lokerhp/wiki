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
    "revision": "0ffbd324b1a99cd8752d78a84422ebc0"
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
    "url": "assets/js/15.2e414459.js",
    "revision": "32af31d42bf903de6adbce66d38f5c03"
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
    "url": "assets/js/app.1b0c890d.js",
    "revision": "4603e5f629b4c70077a4c3b97f111e6f"
  },
  {
    "url": "bungeecord.html",
    "revision": "b6bcd39385db46db50a56b93488681a9"
  },
  {
    "url": "commands/admin.html",
    "revision": "88242245b57aef5fe32a2fdf2018805d"
  },
  {
    "url": "commands/banking.html",
    "revision": "9654d88ca3bb71413e7954440e84335a"
  },
  {
    "url": "commands/player.html",
    "revision": "1f13f4eda4f8f7486ea7e013e82d4224"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "47328eda7f9e11ce5cc29eb9d058c52a"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "62fe8f061398c5b33ff2fb1b7204db21"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "1e8b126315c80e76502c635e3cad9996"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f50cfba001514d6467fe4ff0aadc8a04"
  },
  {
    "url": "en/faq.html",
    "revision": "1a79d16c9c744101984853792d6f3493"
  },
  {
    "url": "en/index.html",
    "revision": "c01bfc6ade91bc1612a2a6c16230af35"
  },
  {
    "url": "en/permissions.html",
    "revision": "07da2330161787eee181361ce3f20160"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "e25e14f849c62168ded0b9fa32306403"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "078badc52c2735bde27ad95d51f76106"
  },
  {
    "url": "en/setup.html",
    "revision": "ac40938b756326dbb2a2b1d22356f668"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "00400d183cf6b05ff2403f49f5f3a9aa"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "3908b5cc67b258387deb19c9e26fbcd4"
  },
  {
    "url": "faq.html",
    "revision": "c496914cea2c6b3d5f7c78a054383682"
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
    "revision": "b0ca9205e462ac43e142977858dff2e8"
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
    "revision": "230e05bea66e1815f7f3d66033b7a043"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "109103394fe0427b9b71931995a12fb3"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "68c9485ba3d45fb366bc70fd8e88f110"
  },
  {
    "url": "setup.html",
    "revision": "d582118a06a2ee89eef0e6ffbbdfe788"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "68c1f80b1b7f5bf8abc82b73a45296a4"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "073862eb4a46f214e736c235c58975cf"
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
