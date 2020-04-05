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
    "revision": "9e919e82a5f04b1bea0310a21bcbb3f2"
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
    "url": "assets/js/app.f0f4ee0c.js",
    "revision": "704eee1c812c8f44ea6087975ff8d9b4"
  },
  {
    "url": "bungeecord.html",
    "revision": "fa9473675466e34d52fd6cd37bbf778e"
  },
  {
    "url": "commands/admin.html",
    "revision": "b9c2e457e1bbcb34ed02f43d02f2073c"
  },
  {
    "url": "commands/banking.html",
    "revision": "51634c68da7b3b7cadca581ea0dabd9b"
  },
  {
    "url": "commands/player.html",
    "revision": "fba810fbfec380fde93433d349f4f83d"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "6432c1679bffaf3f24945369f341b2d8"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "f7a8b2b5cfdd81bbe6b1108a5a19177e"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "0db74d032bfc031b71300e2c48332a4a"
  },
  {
    "url": "en/commands/player.html",
    "revision": "c6141a057d52215fd90dce9eb61981fe"
  },
  {
    "url": "en/faq.html",
    "revision": "73695ea794a610b264c779236c27a225"
  },
  {
    "url": "en/index.html",
    "revision": "8c2a46b0d1d421c327ac9d0e759e40d4"
  },
  {
    "url": "en/permissions.html",
    "revision": "4901936c3bc53e616e04f5e8217451c4"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "a9cf79bb430cf2a1eacb33cd0be8646c"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "fe095afbb4432276d3d83c423a8d6d56"
  },
  {
    "url": "en/setup.html",
    "revision": "1ffed92708cd35519425c3a89991e297"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "019ceb8bcd4b7dcc0a496344edf87cc7"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "f7db86616ff8a4d4a7f180cdcdc80215"
  },
  {
    "url": "faq.html",
    "revision": "e21369d2c70c35c2c1b9c8a363acc99a"
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
    "revision": "15721fc27abaec3203ecbe05d2fc4b48"
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
    "revision": "99676d1414bbc4bacebce5d0bfa96759"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "405d1f2a650db322fec2ca0df71de1ca"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "1d2e318c72747704bd27cd8b92399a7d"
  },
  {
    "url": "setup.html",
    "revision": "63980ec5ae1eeb3b250605eb69035299"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "5b5c65fd085c2d150932a8d3d8cca52a"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "7b683a83fa32c53c2a93c6c38d719d17"
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
