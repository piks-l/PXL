export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'PIKS-L',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official website' },
    ],
    link: [
      { rel: 'icon', type: 'image/gif', href: 'favicon.gif' },
    ],
    script: [
      { src: 'https://unpkg.com/three@0.136.0/build/three.min.js'}, 
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'},
      { src: '/js/extra.js'},
      { src: 'https://unpkg.com/split-type'},
    ]
  },
  css: ['~/assets/css/style.css','~/assets/css/transition.css','~/assets/css/keyframes.css','~/assets/css/swiper.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },
  loading: '~/components/ui/preloading.vue',
  // PWA config: https://pwa.nuxtjs.org/
  pwa: {
  },
  plugins: [
    //'~/plugins/ga.js'
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],
  components: true,
  pageTransition: {
    name: 'page-pxl',
    mode: 'out-in',
    beforeEnter (e) {
      console.log('Before enter page ...');
    }
  },
  layoutTransition: {
    name: 'layout-pxl',
    mode: 'out-in'
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/device','nuxt-gsap-module','@nuxtjs/tailwindcss'],
  // Device config: https://github.com/nuxt-community/device-module
  device: {
    refreshOnResize: true
  },
  // GSAP config: https://www.npmjs.com/package/nuxt-gsap-module
  gsap: {
    extraPlugins: {
      cssRule: false,
      draggable: true,
      easel: false,
      motionPath: false,
      pixi: false,
      text: true,
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: false,
      roughEase: false,
      slowMo: false,
    }
  },
  // AXIOS config: https://axios.nuxtjs.org/options 
  axios: {
    // proxy: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  //Lazy loading config: https://www.npmjs.com/package/nuxt-lazy-load
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    'nuxt-lazy-load'
  ],
  // Modules config: https://sitemap.nuxtjs.org/guide/configuration/
  sitemap: {
    hostname: 'https://www.piks-l.fr/',
    gzip: true,
    //routes: [
      //'/lieux',
      //'/artiste'
    //]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["swiper"],
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|obj|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
  }
}
