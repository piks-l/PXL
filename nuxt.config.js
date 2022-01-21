export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'Electro Alternativ 2022',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Avec plus de 700 artistes programmés, Electro Alternativ parcourt depuis 15 ans toutes les scènes électroniques, invitant les plus grands noms de la scène internationale, nationale et locale.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&family=Yeseva+One&display=swap' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js'},
      { src: 'https://unpkg.com/split-type'},

    ]
  },

  css: ['~/assets/css/style.css','~/assets/css/transition.css','~/assets/css/keyframes.css',],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },

  // Loading
  //loading: '~/components/Loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/ga.js'
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
     ['nuxt-facebook-pixel-module', {
      track: 'PageView',
      pixelId: '370934850203990',
      disabled: false
    }]
  ],
  sitemap: {
    hostname: 'https://electro-alternativ.com',
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
