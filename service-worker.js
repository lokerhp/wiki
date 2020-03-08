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
    "revision": "c72402bb8951e19160e6327e2f93fbc2"
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
    "url": "assets/js/app.5a7cc6cd.js",
    "revision": "32bdcd2592566b47b248cbfb968dffd0"
  },
  {
    "url": "bungeecord.html",
    "revision": "7b674a1de735ddef8b7c09ba1b62397d"
  },
  {
    "url": "commands/admin.html",
    "revision": "f3dc420740e852b87db0ff773ca9a8c5"
  },
  {
    "url": "commands/banking.html",
    "revision": "35f1a976a1fecc9c24105fc288efd8d0"
  },
  {
    "url": "commands/player.html",
    "revision": "fd90221a397f88158f0b4af716a82a1b"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "e3776dcc5027a878211516f9ad1a3afa"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "e6045a556120f7a60bc1a900ad344a81"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "62ff2195cf257ee6bee109882723ad1b"
  },
  {
    "url": "en/commands/player.html",
    "revision": "66962bf0420cef588aa214b61e9f60c8"
  },
  {
    "url": "en/faq.html",
    "revision": "c46793866cbfacaeec4c9007a62737c0"
  },
  {
    "url": "en/index.html",
    "revision": "e70a55826388821dea6cfe677510dae7"
  },
  {
    "url": "en/permissions.html",
    "revision": "8b90123d34191c4c470fafc63f041282"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "8114ad621505c32a094ae2d3dd4b38ce"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "4799092a1d369106abd317a278d39776"
  },
  {
    "url": "en/setup.html",
    "revision": "af714eeb006416b967db41209db9fbdf"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "47ef32502d28b016dc1c14bb06ad7a49"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "2bd37f44beb59f4b4001ff7b017d0a5d"
  },
  {
    "url": "faq.html",
    "revision": "0d857d9db84fe0a3ddac1079af1f8d7b"
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
    "revision": "281e9bd3dd72072ab9e3c17f7d38c972"
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
    "revision": "0b4ff202bf6f0654ebdd025489dfb6d2"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "0fe763a8a97c8e9f4ab58f9d2020927a"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "b56b0e001bcbc9062376ea35e891436f"
  },
  {
    "url": "setup.html",
    "revision": "9468a5e9825b4df9e7c2e836becd2d9a"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "0466907f563b9191e381dac0626bd9c8"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "b00e027f2c3a62643f433803ff6b624e"
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
