// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		layoutTransition: { name: "layout", mode: "out-in" },
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
				},
			],
		},
	},
	runtimeConfig: {
		// Private keys are only available on the server

		// Public keys that are exposed to the client
		public: {
			// apiBase: process.env.NUXT_PUBLIC_API_BASE,
			apiBase: "http://localhost:4000",
		},
	},
	modules: ["@pinia/nuxt"],
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	css: [
		"@fortawesome/fontawesome-svg-core/styles.css",
		"~/assets/css/main.css",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
