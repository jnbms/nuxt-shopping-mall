export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  head: {
    title: '신상마켓',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/reset.css"
  ],
  // axios: {},
  proxy: {
    '/api/' : {
      target: 'https://clotheapi123.herokuapp.com/',
      pathRewrite: {'^/api/': ''}
    }
  },
  env: {
    // baseUrl: 'https://clotheapi123.herokuapp.com'
    baseUrl: 'http://localhost:5000'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~/plugins/vue-google-oauth2', ssr: false}
    // {src: '~/plugins/vuex-persist', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ 
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    '@nuxt/image',
    ['nuxt-vuex-localstorage',{
      sessionStorage: ['acount']
    }]
  ],

  auth: {
    strategies: {
      google: {
        clientId: '270485046976-4ae3aunmmig2u21qje2c03l5n08s0qia.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        redirectUri: 'https://nuxt-ecommerce-web.vercel.app/auth/google/redirect',
        // redirectUri: 'http://localhost:3001/auth/google/callback',
        grantType: 'authorization_code',
        // endpoints: {
        //   token: 'http://localhost:3001/auth/google/token', // somm backend url to resolve your auth with google and give you the token back
        //   userInfo: 'http://localhost:3001/auth/google/user' // the endpoint to get the user info after you recived the token 
        // },
      },
      naver: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://nid.naver.com/oauth2.0/authorize',
          // logout: 'https://nid.naver.com/nidlogin.logout' 
        },
        grantType: 'authorization_code',
        responseType: 'code',
        codeChallengeMethod: '',
        clientId: "ZN9LJvJmBVxXuMVU8muB",
        // naver have to write www.
        redirectUri: "https://nuxt-ecommerce-web.vercel.app/auth/naver/redirect"
      },
      kakao: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://kauth.kakao.com/oauth/authorize',
        },
        grantType: 'authorization_code',
        responseType: 'code',
        codeChallengeMethod: '',
        clientId: "3b7294b134903d00567d453cc7974cd3",
        redirectUri: "https://nuxt-ecommerce-web.vercel.app/auth/kakao/redirect"
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
