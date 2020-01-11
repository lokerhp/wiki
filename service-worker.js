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
    "revision": "b12a843096c02746dbfa1db649ac209e"
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
    "url": "assets/js/app.e98ec1f8.js",
    "revision": "39c8be9ce63f38a4c29bdd9fc31d115f"
  },
  {
    "url": "bungeecord.html",
    "revision": "12ea096cef94fe0f5e3be898a25fcda8"
  },
  {
    "url": "commands/admin.html",
    "revision": "90aaf96d073ee4e9ac5f072f6b1f5e05"
  },
  {
    "url": "commands/banking.html",
    "revision": "a245c76cc5a40800ea61a37784fb31db"
  },
  {
    "url": "commands/player.html",
    "revision": "0bf6b3cbaaaa8b77c4de8fba5aef5e7b"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "c39312fa3cbcc08179fe5a181eceee48"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "3e75a15ae7b427cecd30032e05a1f37c"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "f6775b7bdc5476e20729456c94264ce0"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f10e7ca43427b9c884191f7071f0ad04"
  },
  {
    "url": "en/faq.html",
    "revision": "b3db1b2c629d1f3c7f945ffa23a67d1b"
  },
  {
    "url": "en/index.html",
    "revision": "a7ddb3a5ecf1f75b17399a778d7fba68"
  },
  {
    "url": "en/permissions.html",
    "revision": "098058b1370f4d856d7e5a3d16bfad8a"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "be3d615e1ec379f08235ee2f69769682"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "09fcfe30d2147e60abb88ef8ea164a4b"
  },
  {
    "url": "en/setup.html",
    "revision": "533e09592089a44fb09a8bf13247c1a5"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "245332f4ff4b970d1e121954c5514a45"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "abe3e393f0aeeb07e363831aedf3f27b"
  },
  {
    "url": "faq.html",
    "revision": "3386ef463428e4cc7270a8a2286892c0"
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
    "revision": "aa58bb2e1426c79ed0e1a300571f3d7c"
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
    "revision": "318c920aea193293a6701f6a57979241"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "69c9f83a98fab5c0e76dd0f3a53281a6"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "b46d57380e009937920a715460498098"
  },
  {
    "url": "setup.html",
    "revision": "7a75ac4191b709223be7b6d74dc3093b"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "46a077b8c007108687197962bf49cd3a"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "6ae29daec2bc82157092e1ead088d523"
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
