if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const d=e=>i(e,r),c={module:{uri:r},exports:o,require:d};a[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/01.png",revision:"96b754b721110b11982ce2fced796125"},{url:"/02.png",revision:"22b0ee3a6c7837edc2e231c8d02ffe36"},{url:"/03.png",revision:"d1d68d88fb8b8aa432d5e491de947939"},{url:"/_next/static/chunks/332-2d0cb4416365c819.js",revision:"2d0cb4416365c819"},{url:"/_next/static/chunks/66-135e0e68bfb0caba.js",revision:"135e0e68bfb0caba"},{url:"/_next/static/chunks/892.a3234bb00539308c.js",revision:"a3234bb00539308c"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-88daceff7ddb84a7.js",revision:"88daceff7ddb84a7"},{url:"/_next/static/chunks/pages/_app-ffef3fcec255f447.js",revision:"ffef3fcec255f447"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/about-us-e54d2406bfdf9a4f.js",revision:"e54d2406bfdf9a4f"},{url:"/_next/static/chunks/pages/index-357903f3a94d258c.js",revision:"357903f3a94d258c"},{url:"/_next/static/chunks/pages/products-c944c99f0be4049d.js",revision:"c944c99f0be4049d"},{url:"/_next/static/chunks/pages/products/%5BcategoryId%5D-4aa1a92eda216da0.js",revision:"4aa1a92eda216da0"},{url:"/_next/static/chunks/pages/products/%5BcategoryId%5D/%5BproductId%5D-3552e6a7d6f15bcc.js",revision:"3552e6a7d6f15bcc"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7a1623993d5dc67a.js",revision:"7a1623993d5dc67a"},{url:"/_next/static/css/8c094fba2c0a6b27.css",revision:"8c094fba2c0a6b27"},{url:"/_next/static/jBD8_n78AYo2zGoLATdLL/_buildManifest.js",revision:"5cb2faedd413841e5b0cede24296c3f3"},{url:"/_next/static/jBD8_n78AYo2zGoLATdLL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/gradiant.5198fd09.png",revision:"5198fd09"},{url:"/_next/static/media/headerQ.7283e21f.png",revision:"7283e21f"},{url:"/about/c1.png",revision:"73606a2a7e874b3a6b00a93354d05a4f"},{url:"/about/c2.png",revision:"55b0758512a76aa6983255ac91b13256"},{url:"/about/c3.png",revision:"cfc503c6a579bf89afd85080ff18d534"},{url:"/about/c4.png",revision:"ffb3a64b90dd615b4e5cb3da8d38ea2c"},{url:"/about/c5.png",revision:"24792bb126c066e022b1f07156e86e61"},{url:"/about/c6.png",revision:"89d52d736af00f1ca291eb812dbf3bc2"},{url:"/about/exp.png",revision:"653d2b16319d3853f134ff25640ed099"},{url:"/about/flower.png",revision:"69e241eb548d83ee8435de872bdbbdbc"},{url:"/about/gradiant.png",revision:"3c8626145e1f7f17edf3550d897c4e0c"},{url:"/about/hand.png",revision:"c0c78655b48db8eee1beec286be322d9"},{url:"/about/header.png",revision:"cf6855fe48ec392f89f15441f1dd12f1"},{url:"/about/headerQ.png",revision:"ed4e3d8bda1bb9e88f8ae560db03592c"},{url:"/android/android-launchericon-144-144.png",revision:"da459116bb0df07e5543003e4406da2d"},{url:"/android/android-launchericon-192-192.png",revision:"7ab5bea44050e45242e250ad1adb5e70"},{url:"/android/android-launchericon-48-48.png",revision:"95d8cb96b0d26b05a3ee8b12dcc9fab3"},{url:"/android/android-launchericon-512-512.png",revision:"dd2adb60af6db916c9e2c552d8859d04"},{url:"/android/android-launchericon-72-72.png",revision:"a496c7cfd9933e37dea4241b9e175342"},{url:"/android/android-launchericon-96-96.png",revision:"9aeffff03df133239f676bd568a176cf"},{url:"/atexLogo.png",revision:"0c7c2a0290ec58d152ade27b3e7e39b6"},{url:"/bannerPic.png",revision:"1cb97efc7e724ba3063644e0da56fbff"},{url:"/bg1.png",revision:"a7cf152d2555c43f1d705a8010aaa874"},{url:"/earth.png",revision:"f916719989df3d89ea1d9ac013bf5e89"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/footerLogo.png",revision:"6b5d610749567cb219201cf8855a287a"},{url:"/ios/100.png",revision:"57ed36c4381ec89bb2f31b56ac60aa50"},{url:"/ios/1024.png",revision:"96b801217c9a0e8a445408daea02dabe"},{url:"/ios/114.png",revision:"527796dc353d8dc6623df909e289b18b"},{url:"/ios/120.png",revision:"c29b8d4cf5034a8136c0b4db0cd6694b"},{url:"/ios/128.png",revision:"99eb924c975e5132ebf334963b839bfc"},{url:"/ios/144.png",revision:"da459116bb0df07e5543003e4406da2d"},{url:"/ios/152.png",revision:"056d192996b502f540b2a56bfb7eab19"},{url:"/ios/16.png",revision:"ba17534771c9313e01f63c200173fe62"},{url:"/ios/167.png",revision:"f0f5b71940cd387abeffc1c4f6a908ae"},{url:"/ios/180.png",revision:"fbabfb96a91a144d0766c3444b64b3f5"},{url:"/ios/192.png",revision:"7ab5bea44050e45242e250ad1adb5e70"},{url:"/ios/20.png",revision:"e41aaef1c954b162a65d8440f546d652"},{url:"/ios/256.png",revision:"0f4a055e5c3fa521be110e03fafc9c9f"},{url:"/ios/29.png",revision:"39ae83f2fa79d44ce03b252b59a12c35"},{url:"/ios/32.png",revision:"6d76a2c4d43ecd4ee9d9ad7f1fbc39e8"},{url:"/ios/40.png",revision:"964510f1a8df0c038c61ef6283e11dfb"},{url:"/ios/50.png",revision:"acc05853038bb6d5c19ade727801ac17"},{url:"/ios/512.png",revision:"dd2adb60af6db916c9e2c552d8859d04"},{url:"/ios/57.png",revision:"41ab60f0b9a9435f994ef6dcd1f07081"},{url:"/ios/58.png",revision:"458542ee2f0caa878215b2afed0b73b6"},{url:"/ios/60.png",revision:"c63fc63d2c0fba3094880fac3762de1c"},{url:"/ios/64.png",revision:"bb6dca05a0a35f5d93399e43746e89fa"},{url:"/ios/72.png",revision:"a496c7cfd9933e37dea4241b9e175342"},{url:"/ios/76.png",revision:"461ea102c89543af7e9386659ad76a78"},{url:"/ios/80.png",revision:"20a1084a7ce319ce4ee2f61d1b7d9447"},{url:"/ios/87.png",revision:"5fde8674694d08fbf39f44b6d121b92a"},{url:"/manifest.json",revision:"1997d813332be6a5f74ec84718b959ca"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/o1.png",revision:"d80db05340ead1362b221c3d947b0cca"},{url:"/o2.png",revision:"378c60cda47577d3ee031cb51faeeb90"},{url:"/o3.png",revision:"795dd55bdb7d31b65653b6999da083da"},{url:"/o4.png",revision:"db81631e5116eaa97034b318fb736f1c"},{url:"/products/p1.jpg",revision:"1d3942a2514589782222a55cbfe107d5"},{url:"/products/pr.jpg",revision:"f71d1a51a6ed2a6657b3f3eafa7fd02d"},{url:"/products/products.png",revision:"586acd438d1509403e2bcbe9414b33a9"},{url:"/quiz.png",revision:"6fc988789668d4bdd3ac75371229e4b2"},{url:"/review.png",revision:"e4fcd91dbe4667242393b3ccab968965"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/upCorsur.png",revision:"1da1aff7eacfd7459d5a92aadae54f63"},{url:"/user1.jpg",revision:"e1eb7f87658e29106ec2d24a62a0516c"},{url:"/user2.jpg",revision:"4ffb98dcaf4e089746a72864799e059e"},{url:"/user3.jpeg",revision:"0c4bc590aa5b96fa93bb7dfd562fd0ed"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"f09a9fc479b94032a2c78187aef33616"},{url:"/windows11/LargeTile.scale-125.png",revision:"7e7467696f4396c0151c3dfc6042658f"},{url:"/windows11/LargeTile.scale-150.png",revision:"869915f47ce43b40d92222526c129a8e"},{url:"/windows11/LargeTile.scale-200.png",revision:"88ccdf54c600fdd71c59b6e0b3182ecf"},{url:"/windows11/LargeTile.scale-400.png",revision:"e337bed9ddb66196c7828bd208eac298"},{url:"/windows11/SmallTile.scale-100.png",revision:"ab9695de2678a63f96fc9916df7e0d19"},{url:"/windows11/SmallTile.scale-125.png",revision:"5c1761d0184216e9f1d2c5b1c633db61"},{url:"/windows11/SmallTile.scale-150.png",revision:"b0c65c8b76aee4a361d8459104508815"},{url:"/windows11/SmallTile.scale-200.png",revision:"b20831756a89ab4f516d028fc5a9fcf9"},{url:"/windows11/SmallTile.scale-400.png",revision:"7042456c99c8bf54b2cb64d3f584052d"},{url:"/windows11/SplashScreen.scale-100.png",revision:"50900d19d07745b43678bcc22ade6500"},{url:"/windows11/SplashScreen.scale-125.png",revision:"137ca9cce3161f26d8ae0ce3a1392028"},{url:"/windows11/SplashScreen.scale-150.png",revision:"557585fc5dc393fb8be13db7f68560e4"},{url:"/windows11/SplashScreen.scale-200.png",revision:"8575d959be2814067cf5e5f7f4d3f404"},{url:"/windows11/SplashScreen.scale-400.png",revision:"7b3d17ab436fac04a94a3b77bb7f4367"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"ebc8314b143cb6113ae5b771904a6727"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"ed06330824c87626e70b641b5fd588ff"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"1514d360dd2ca21ac480697991c6a820"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"7acd80d44b705d95d51aec4b858a9959"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"0bbacfc0932f46f32eca05fabbdc2425"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"8d838128ae2844c589f287b00161d4b0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"a5ade4267274a5096da3a93f85cbf968"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"1326570550e4383909801418392704fe"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"c57312e1ce2fef2091d583abb8156780"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"af7980cfb2ed371ba38bf0d498abc94c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"f4a1d5b719105740e95223c2c50b24a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"cd1204477bf0480495bb34369796a174"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"7ffa84430b3a7b1aeaf521d49d46f155"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"bc6c5e712bcf2821860c5be897cc5ac4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5a83692d31d887202c1bbb1dbf2e00f5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"48529a45824957286f9ead5ea26d4a59"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"e16d8eff8e45f81e61edf29cd0ec1c0d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"f32d54364ed92a5f74b392f5a488d206"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"43c6510abbdf83319cf998788f86872e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"3c8756de05ea1d5a246c5e094b41f205"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"8d838128ae2844c589f287b00161d4b0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"a5ade4267274a5096da3a93f85cbf968"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"1326570550e4383909801418392704fe"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"c57312e1ce2fef2091d583abb8156780"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"af7980cfb2ed371ba38bf0d498abc94c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"f4a1d5b719105740e95223c2c50b24a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"cd1204477bf0480495bb34369796a174"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"7ffa84430b3a7b1aeaf521d49d46f155"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"bc6c5e712bcf2821860c5be897cc5ac4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5a83692d31d887202c1bbb1dbf2e00f5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"48529a45824957286f9ead5ea26d4a59"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"e16d8eff8e45f81e61edf29cd0ec1c0d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"f32d54364ed92a5f74b392f5a488d206"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"43c6510abbdf83319cf998788f86872e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"3c8756de05ea1d5a246c5e094b41f205"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"bc6c5e712bcf2821860c5be897cc5ac4"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"c3361ccbb60f67a1371612f9e2939c5c"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"c45552a18f2ddbf90a365c5f214d117b"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"e7b276a211094e5d6d29f9f6705b50c4"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"b671087dc8f3d8c7078cb4de6b85b015"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"8d838128ae2844c589f287b00161d4b0"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"a5ade4267274a5096da3a93f85cbf968"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"1326570550e4383909801418392704fe"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"c57312e1ce2fef2091d583abb8156780"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"af7980cfb2ed371ba38bf0d498abc94c"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"f4a1d5b719105740e95223c2c50b24a2"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"cd1204477bf0480495bb34369796a174"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"7ffa84430b3a7b1aeaf521d49d46f155"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"bc6c5e712bcf2821860c5be897cc5ac4"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"5a83692d31d887202c1bbb1dbf2e00f5"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"48529a45824957286f9ead5ea26d4a59"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"e16d8eff8e45f81e61edf29cd0ec1c0d"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"f32d54364ed92a5f74b392f5a488d206"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"43c6510abbdf83319cf998788f86872e"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"3c8756de05ea1d5a246c5e094b41f205"},{url:"/windows11/StoreLogo.scale-100.png",revision:"acc05853038bb6d5c19ade727801ac17"},{url:"/windows11/StoreLogo.scale-125.png",revision:"500b847e1ceb8a87d7ef6cc8fd8a98d4"},{url:"/windows11/StoreLogo.scale-150.png",revision:"9780a12c7c7e8541ef713e1a15d56de8"},{url:"/windows11/StoreLogo.scale-200.png",revision:"57ed36c4381ec89bb2f31b56ac60aa50"},{url:"/windows11/StoreLogo.scale-400.png",revision:"a9f2a2f7e059c8ce0839c31e8aa4f99e"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"82f68bd63cd852902fa7e11dbff3a1de"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"80df2b5d2df4c258755735374995c1bc"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"fa4282f4abbcc3bf82dd2bf11e21b405"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"50900d19d07745b43678bcc22ade6500"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"8575d959be2814067cf5e5f7f4d3f404"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
