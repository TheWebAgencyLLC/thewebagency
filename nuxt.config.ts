// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts', 'nuxt-icon'],
  
  googleFonts: {
    families: {
      'JetBrains Mono': [100, 200, 400, 500, 600, 700],
    }
  },

  app: {
    head: {
      title: 'The Web Agency | Dev & Design Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The Web Agency delivers custom websites and software solutions engineered to drive measurable business growth. Our expert team creates strategic digital experiences that convert visitors into customers, helping brands of all sizes maximize ROI through performance-focused design and development. Transform your online presence into your most powerful business asset.' },
        { name: 'keywords', content: 'web development agency, custom website design, business website development, software solutions, responsive web design, e-commerce development, digital strategy, SEO optimization, business growth, web applications, UI/UX design, professional web services, mobile-friendly websites, brand digital presence, conversion-focused websites' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        
        // Apple Touch Icon
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        
        // Android Chrome icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        
        // Web Manifest
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  compatibilityDate: '2025-02-14'
})