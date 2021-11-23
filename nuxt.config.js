export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router: {
        base: '/medvinsky-app/',
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'medvinsky-app',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://css.gg/chevron-down.css' },
            { rel: 'stylesheet', href: 'https://css.gg/chevron-up.css' },
        ],
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            '~/components/ui',
            '~/components/visuals',
            '~/components/plots'
        ],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://nuxtjs.org/docs/directory-structure/content/
        '@nuxt/content',
        // https://github.com/richardeschloss/nuxt-highcharts
        'nuxt-highcharts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
