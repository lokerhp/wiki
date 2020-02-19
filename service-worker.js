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
    "revision": "2a338a746201c7fd5f791b7afb66240c"
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
    "url": "assets/js/20.1a2ac04d.js",
    "revision": "39ff0fa04ca7896d76f9bce9e7c7521a"
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
    "url": "assets/js/app.9697d196.js",
    "revision": "ba83170f317fc20a7c2bd44607229778"
  },
  {
    "url": "bungeecord.html",
    "revision": "7023f8eaf3bb94c1170426482014d0ce"
  },
  {
    "url": "commands/admin.html",
    "revision": "44186a78eacc4879aaf3594297bbf985"
  },
  {
    "url": "commands/banking.html",
    "revision": "4467127d6236e90aa372eab6d6ce0501"
  },
  {
    "url": "commands/player.html",
    "revision": "5a7c65890c1b15d72c70c528419868ec"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "94c80d2fa8a9aecf8d797e5fa4cceb9f"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "ca7c9cc7f0d2e4926abbb249de3e2133"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "e9cce0dfc5e38f7bbcb8255545383f34"
  },
  {
    "url": "en/commands/player.html",
    "revision": "475d70e1188e218ce7206108b2616823"
  },
  {
    "url": "en/faq.html",
    "revision": "f200e4f6da127304d8d7a02b88e58f17"
  },
  {
    "url": "en/index.html",
    "revision": "70f552a57377bc1e80a2367890bee3ab"
  },
  {
    "url": "en/permissions.html",
    "revision": "f7ebd44f962afbd22856acc64eb204e4"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "4d9133c04e6687c9c91bc2c115135fa6"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "3406341a744e5752e332dcd0d16d1552"
  },
  {
    "url": "en/setup.html",
    "revision": "11bcb7435c46fd61c18fc0d3f414110b"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "488fecc1f954069c3b5c4242116b364f"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "c51de246d37ebe129ef555c441889991"
  },
  {
    "url": "faq.html",
    "revision": "badec29bb9996ebef8b25d327c697bf4"
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
    "revision": "558b651df40bf6e0d0b25866839e4338"
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
    "revision": "1445257d4fad2119337fbd24e7ff366a"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "cc2723ea4ad803a168eaee8075897d63"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "e307fad53a0f6377d90ec467ea6d79d2"
  },
  {
    "url": "setup.html",
    "revision": "77a2886b0cefde29c3d59567b706de34"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "2201c2396fdda83a729b110cc4784738"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "99a22e4ad2c3b0ada66163ad6d239c77"
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
