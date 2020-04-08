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
    "revision": "8cf2f470586d445437c9b6380c86dc1d"
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
    "url": "assets/js/10.b0b4be0f.js",
    "revision": "cec621e637be87c5e9eb9deeee5f1942"
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
    "url": "assets/js/14.c7e68f67.js",
    "revision": "765c42235ee1fbede516b0250c8355ee"
  },
  {
    "url": "assets/js/15.2e8d67f5.js",
    "revision": "a629d4327cfc96a1d297e5e9f4e72bc1"
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
    "url": "assets/js/4.fce28b9b.js",
    "revision": "e69ef5e71683c95783284b9cb284962a"
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
    "url": "assets/js/7.ecb364d9.js",
    "revision": "816669fc74931a0d09b1d50f483674c8"
  },
  {
    "url": "assets/js/8.d0664714.js",
    "revision": "e43e3510a1ea8fc0e06abc30a9ccb40c"
  },
  {
    "url": "assets/js/9.b369c858.js",
    "revision": "bca3e8b57e244f156e7b89e4dc612961"
  },
  {
    "url": "assets/js/app.205cc86e.js",
    "revision": "3918b9fc51ebd3deb362bc1eb8f3d93b"
  },
  {
    "url": "bungeecord.html",
    "revision": "58868dc16295d5c6be5df08a67800e62"
  },
  {
    "url": "commands/admin.html",
    "revision": "67b5a143126edd3aad6bd346566a6e39"
  },
  {
    "url": "commands/banking.html",
    "revision": "da6ab25942acf2ea40510231f6d68503"
  },
  {
    "url": "commands/player.html",
    "revision": "6a2040792e7dc6d3b1114eb7b85117a2"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "6dd4eae1fa8588e967188f5ec229aef3"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "c3578fe79fe674499e5141381cb9c565"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "8424ce6915bbb69ab32e0b77843f6e48"
  },
  {
    "url": "en/commands/player.html",
    "revision": "35f5ef3471a534b71fd181a640e70521"
  },
  {
    "url": "en/faq.html",
    "revision": "a150b596b6bb98a4b15d4984474f1941"
  },
  {
    "url": "en/index.html",
    "revision": "3e51873ab04b4c55197bcede6c4da17c"
  },
  {
    "url": "en/permissions.html",
    "revision": "c35bccb281451827d718896cec82ec48"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "1c218eca3f642f98df2c7309da35512c"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "d068ae6e3ccec8b19fd15ac46d0ee5cc"
  },
  {
    "url": "en/setup.html",
    "revision": "dd41793f9a9bd257694e839361149d02"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "6dea2c525e2a6c7f126e8c3e554966fd"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "59a17bea55a209b8a8d3c386e6300d9e"
  },
  {
    "url": "faq.html",
    "revision": "722373995facf0ddb684c814a2c058b0"
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
    "revision": "49c6b7c48473d9d6e8691d00f7afc027"
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
    "revision": "a05cc1cd8062a9b470b657fe0970dc96"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "358f72f9e630c13e179b02328267f4fa"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "4f6515fe6f6ff7bd1211ce154dd8cf9d"
  },
  {
    "url": "setup.html",
    "revision": "7a6d47fa935b19871c95bedc4ba45b8e"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "f5460c60e7f1d70540ab0a4b359dbee0"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "e5169d974c9e4d6ceb888a12c2f23555"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "6fc015d3cdba42fdb0f71d70eac9b748"
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
