export default defineNuxtConfig({

  // SECURITY: Formspree ID from env var, never hardcoded in source.
  runtimeConfig: {
    public: {
      formspreeId: '',
    },
  },

  // SECURITY: No source maps in production.
  sourcemap: { server: false, client: false },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      // FIXED: lang="en" added so screen readers correctly identify page language
      htmlAttrs: { lang: 'en' },
      title: 'Ermias Mekonnen — Brand & Packaging Creative Director',
      meta: [{ name: 'description', content: '12 years designing the brands people reach for without thinking twice.' }]
    }
  },
  vite: { optimizeDeps: { include: ['gsap', 'lenis'] } }
})
