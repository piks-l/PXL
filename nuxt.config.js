export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'Saåad',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official website of the experimental & ambient musical project Saåad. Founded by Romain Barbot late 2009.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=IM+Fell+English&display=swap' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'},
      { src: 'https://unpkg.com/split-type'},

    ]
  },

  css: ['~/assets/css/style.css','~/assets/css/transition.css','~/assets/css/keyframes.css',],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },

  // Loading
  loading: '~/components/ui/preloading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'~/plugins/ga.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

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
      draggable: false,
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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://www.saaadrone.com/',
    gzip: true,
    //routes: [
      //'/lieux',
      //'/artiste'
    //]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
