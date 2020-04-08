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
    "revision": "7b72f675d11429c29031f2d3ac8b64e3"
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
    "url": "assets/img/teleportercmd_help.915d51ea.png",
    "revision": "915d51ea52c009095db34609cec6e14e"
  },
  {
    "url": "assets/js/10.bd58cc66.js",
    "revision": "bcff54e01cc8f92767fe7948cde51757"
  },
  {
    "url": "assets/js/11.ea18a41d.js",
    "revision": "0f66155c8192c5b7095fdf73a2b47e03"
  },
  {
    "url": "assets/js/12.3a183b44.js",
    "revision": "6704eb001601f54089aabbb98ed6ea4f"
  },
  {
    "url": "assets/js/13.c888f58a.js",
    "revision": "debde15dee42ed73d43b6fca0e3435bc"
  },
  {
    "url": "assets/js/14.6b5e31ca.js",
    "revision": "205ef02ea2163e33e5a2a1f87ac5a369"
  },
  {
    "url": "assets/js/15.8c098cec.js",
    "revision": "32e99cd46bfa6aa6e27e98ec91456a77"
  },
  {
    "url": "assets/js/16.10c18125.js",
    "revision": "a0450c221126aa8069fe0b5c9629ed2f"
  },
  {
    "url": "assets/js/17.d610bfde.js",
    "revision": "9c7d48995c1611d756b8f361166d2298"
  },
  {
    "url": "assets/js/18.1c49a9b4.js",
    "revision": "d21535cad003d323c8645600dc282a27"
  },
  {
    "url": "assets/js/19.19b4dc4a.js",
    "revision": "07290d68643cf95759f89ac7475ee802"
  },
  {
    "url": "assets/js/2.dd9baaf5.js",
    "revision": "2685a1914a9c98cc59a8672198f97ee7"
  },
  {
    "url": "assets/js/20.9cd6cae4.js",
    "revision": "ea13d84039b870f53439d87c8060ae28"
  },
  {
    "url": "assets/js/21.5947fe87.js",
    "revision": "54b1d711162c9bb62b499b3b43344c59"
  },
  {
    "url": "assets/js/22.4add3fa9.js",
    "revision": "8d15c4123ccea0d2cf908d283623ad90"
  },
  {
    "url": "assets/js/23.e5163bf3.js",
    "revision": "f323529dcdc92df1bed383bb0e64e077"
  },
  {
    "url": "assets/js/24.2bf2ddf7.js",
    "revision": "fbfbe78a2c03d7af0c97b57cf0cad694"
  },
  {
    "url": "assets/js/25.050d76c9.js",
    "revision": "15b2da23068bd041d2a4623fe5772c75"
  },
  {
    "url": "assets/js/26.548cf549.js",
    "revision": "109ada79c2aff7260fee6e268bc4ec70"
  },
  {
    "url": "assets/js/27.56537b2a.js",
    "revision": "2a76bf319bdb8a4abc3d6fcf4487e360"
  },
  {
    "url": "assets/js/28.d192af37.js",
    "revision": "617da17c56e4dff475bcd5417146218b"
  },
  {
    "url": "assets/js/29.aaf975ff.js",
    "revision": "20b5f7555d31d121630f1e49aa63b029"
  },
  {
    "url": "assets/js/3.27771505.js",
    "revision": "b5af4307c49f050f2202db007cda0880"
  },
  {
    "url": "assets/js/30.43568e40.js",
    "revision": "a382774969e579bed3a619872bc61561"
  },
  {
    "url": "assets/js/4.57d16614.js",
    "revision": "35a22f7f010383459817234d58251f3d"
  },
  {
    "url": "assets/js/5.2d23ec4b.js",
    "revision": "60c4647870c5d395173ff48a5aa45c6c"
  },
  {
    "url": "assets/js/6.1691f6d9.js",
    "revision": "b7d663125509abaa019b1efbca60ee0f"
  },
  {
    "url": "assets/js/7.8ba37168.js",
    "revision": "3579c36012db9f6d0a1dbf948136a3ee"
  },
  {
    "url": "assets/js/8.91e7409a.js",
    "revision": "bcb435435fe418ae95a152dd596895f0"
  },
  {
    "url": "assets/js/9.b369c858.js",
    "revision": "bca3e8b57e244f156e7b89e4dc612961"
  },
  {
    "url": "assets/js/app.8302ea82.js",
    "revision": "9c44deadfe1bce2bfdab168a38e4f917"
  },
  {
    "url": "bungeecord.html",
    "revision": "3a7de1e1a9f4799e152d02a680250e8b"
  },
  {
    "url": "commands/admin.html",
    "revision": "163f9cedf67b07ad5dfe8e052690cf11"
  },
  {
    "url": "commands/banking.html",
    "revision": "31e7674be7bff6c95ea2e0e309b62c8f"
  },
  {
    "url": "commands/player.html",
    "revision": "c74ead8cd3730b9ea5e57bd56906a7cc"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "900ea8adb71ada832b25b0c75f903cf2"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "c97eeefefc9e6bf8240be4ff92354071"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "3a2dfafb23f45a7d832c988d5ec4ec95"
  },
  {
    "url": "en/commands/player.html",
    "revision": "b0f8b68ed02589b99943af91ca02a18e"
  },
  {
    "url": "en/faq.html",
    "revision": "bf410b2f905c4656843c5651187c18b7"
  },
  {
    "url": "en/index.html",
    "revision": "cca0acffeaaaa05d55ec2ee2a492fcf2"
  },
  {
    "url": "en/permissions.html",
    "revision": "b8d272e6175661c3e1941a8cbd6143e9"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "5fb6b72d95b29a1fbd98532338a7d6df"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "a91dae01e7fbb479b840581956713c66"
  },
  {
    "url": "en/setup.html",
    "revision": "3374e159fe768e5d7329022a680061cf"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "efcb7e75628faf59fbaa333f89dc0a29"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "ff83c550809ed13a0669a67bb8cba98c"
  },
  {
    "url": "faq.html",
    "revision": "72d94a4ea28292c11d2f8f7ed8f01546"
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
    "revision": "9a429c51463b65c0450234114e91ecb4"
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
    "revision": "26e9097e9e22c964210b3176c1e60cf6"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "94f6c81b08e6630f5b43edf4cabf3daf"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "21ebb75323950eaae5dd55438fc29418"
  },
  {
    "url": "setup.html",
    "revision": "be9372fb2907563b89cb905e089c3628"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "9590f9ff7855fbed4279eeafcbf770f4"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "e7d8224f09fe92f97a13e8f62b8167e8"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "a365d4c9fb28e871c98d77026e5e071e"
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
