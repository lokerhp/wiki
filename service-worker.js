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
    "revision": "0e48ac0c48d14a26f178e4886401e45f"
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
    "url": "assets/js/10.549d118f.js",
    "revision": "1f8eb0432b527057c70fbfb752d71a88"
  },
  {
    "url": "assets/js/11.06736b8a.js",
    "revision": "1e3135eb68385db549216128f951c0a7"
  },
  {
    "url": "assets/js/12.02e0661f.js",
    "revision": "54e011c21ff4fee43189cd512cffff52"
  },
  {
    "url": "assets/js/13.0e184a96.js",
    "revision": "ebc44c6f65cf5e4fc2c7301b739350fc"
  },
  {
    "url": "assets/js/14.51a5ec96.js",
    "revision": "781e9dc84cd7edc82bd36445dd5df69c"
  },
  {
    "url": "assets/js/15.f4af595b.js",
    "revision": "f4b9b5aa87fedb99b8695ffc71d28591"
  },
  {
    "url": "assets/js/16.3abbd59b.js",
    "revision": "8da5c9705c8f8cea645ff25ff1493505"
  },
  {
    "url": "assets/js/17.27b47bab.js",
    "revision": "b12a6b4cd2696ae746f2a2f793eb6374"
  },
  {
    "url": "assets/js/18.11bc6dc1.js",
    "revision": "a322696b887036da71675d5d66dc4c01"
  },
  {
    "url": "assets/js/19.b8b83926.js",
    "revision": "ca935f847e8d7ef8ea9827337d66f435"
  },
  {
    "url": "assets/js/2.5efd51eb.js",
    "revision": "75d6226184d06258323cc15a58652045"
  },
  {
    "url": "assets/js/20.b19347d2.js",
    "revision": "023b5db740b2cde1a013d140da63e63e"
  },
  {
    "url": "assets/js/21.89141863.js",
    "revision": "406a92f60c507c851d11787d10fd7386"
  },
  {
    "url": "assets/js/22.bc9bbc16.js",
    "revision": "42fb4cb2dd46ce9829b417676f3303b0"
  },
  {
    "url": "assets/js/23.91ce7731.js",
    "revision": "bf7dbe1a8c16dd45e6201d5af089b187"
  },
  {
    "url": "assets/js/24.80309b48.js",
    "revision": "6203beebf9506d008d89f805e90c00e7"
  },
  {
    "url": "assets/js/25.e43873fa.js",
    "revision": "7d4081c48356bc31344d5f108bb0d625"
  },
  {
    "url": "assets/js/26.420c13e6.js",
    "revision": "cef41d89344f7894e884888cd84530e5"
  },
  {
    "url": "assets/js/27.77a4c7b3.js",
    "revision": "859de47f5c506737f3055de7d9bdcaa6"
  },
  {
    "url": "assets/js/28.d7242ef1.js",
    "revision": "13b3da556f895e819f6a1178ae9acb7a"
  },
  {
    "url": "assets/js/29.bdf618d0.js",
    "revision": "b0cffbe3c39c01cbfeb594b79db5641d"
  },
  {
    "url": "assets/js/3.9656f673.js",
    "revision": "a41467f97f7a8659dea42de89ad3b527"
  },
  {
    "url": "assets/js/4.6782b409.js",
    "revision": "533b578e6003e849d003d8428f0b2e9f"
  },
  {
    "url": "assets/js/5.c6808b58.js",
    "revision": "1258ea4fe7c37fcf4c5d97de340ce623"
  },
  {
    "url": "assets/js/6.745ba401.js",
    "revision": "6c0dae0ec41069712d8bb56e2fcf57e3"
  },
  {
    "url": "assets/js/7.874c8772.js",
    "revision": "4fa49fa51d92b6dd4c00cd0481506bf3"
  },
  {
    "url": "assets/js/8.620b4a00.js",
    "revision": "1c04a13c1ee9f4b3e47f6589c78ebd82"
  },
  {
    "url": "assets/js/9.6026286b.js",
    "revision": "ef5a6814783a09be29a28ed1ea890653"
  },
  {
    "url": "assets/js/app.741756f1.js",
    "revision": "2661c7e775f5d68379fc7d92641455a1"
  },
  {
    "url": "bungeecord.html",
    "revision": "068d5fc4c6276184211743c038958099"
  },
  {
    "url": "commands/admin.html",
    "revision": "d1490ccee5ed7f0d373d087bc85ced73"
  },
  {
    "url": "commands/banking.html",
    "revision": "c8157e1efecb0b7f5c9a8ed9278ac7ff"
  },
  {
    "url": "commands/player.html",
    "revision": "9c5f86fab0c84266a9d9a262a56b3260"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "ec314d912bd708ab3fcea2ca830e8a4f"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "c4feec88328909bde2c5de54855c650c"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "b97f9f9a97eba5804bfeffdfbdcf8739"
  },
  {
    "url": "en/commands/player.html",
    "revision": "bed002b2f6246a65038e70df4442aa0d"
  },
  {
    "url": "en/faq.html",
    "revision": "996c93c3c6d0d7b9f4893e17a4750ee8"
  },
  {
    "url": "en/index.html",
    "revision": "2d50aecbc8b16ae582f9fce07d8af92f"
  },
  {
    "url": "en/permissions.html",
    "revision": "81cb87a3b606f1fede089ed2863b8b59"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "de3624328a88bf6e88d489479a041b4f"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "94634fe47fba83d429723b46fda7bb03"
  },
  {
    "url": "en/setup.html",
    "revision": "0c94cfd02ed4037157158b72bb65224e"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "7a300c4f34b629e1524fc870679b4e4d"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "cf47c5253f2335bd640b78190e9bf987"
  },
  {
    "url": "faq.html",
    "revision": "a561b4d86b4ccff878e1c6efda7a1b31"
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
    "revision": "7cbb9a5f5f4be3b80ddb1ceceb766be5"
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
    "revision": "90fb3f937319222d4f1376cb2b2cae4c"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "e4a87a9e00b3c168884786fb1db6518f"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "9cf72c6635e8c76074907983bfa42da1"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2e81e18d09a6153d6f4fabb47eee138a"
  },
  {
    "url": "setup.html",
    "revision": "0c3d2e15f6f11000c39db3da8ee94c92"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "6dd574d8b497eb978e2e8b1d8f57321a"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "99aa3124fa1272b82795af71d4f985d0"
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
