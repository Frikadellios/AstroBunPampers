/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	corePlugins: {
		preflight: true,
	  },
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#F0FFFF",
					100: "#D6FFFE",
					200: "#9EFFFD",
					300: "#29FFFB",
					400: "#00F5F1",
					500: "#00ECE8",
					600: "#00D6D3",
					700: "#00BDBA",
					800: "#009E9B",
					900: "#00706E",
					950: "#005250"
				  },
				  bgmain: {
					50: "#E4E8EC",
					100: "#CCD3DC",
					200: "#98A7B8",
					300: "#647991",
					400: "#414E5E",
					500: "#1D232A",
					600: "#171C21",
					700: "#111418",
					800: "#0D0F12",
					900: "#060809",
					950: "#020303"
				  },
				customPrimary: "rgb(99, 102, 241)",
				customSecondary: "rgb(161, 163, 247)",
				customDarkBg1: "rgb(31, 32, 35)",
				customDarkBg2: "rgb(38, 39, 43)",
				customDarkBg3: "rgb(48, 49, 54)",
				customDarkBg3Hover: "rgb(55, 56, 62)",
				customContentSubtitle: "rgb(178, 184, 205)",
				customGrayBorder: "rgb(255,255,255,0.1)",
				customGrayText: "rgb(174, 178, 183)",
				customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
				customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
				customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)"  
			  },
			  animation: {
				blob: 'blob 10s infinite',
				border: 'background ease infinite',
			},
			keyframes: {
				background: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				blob: {
				  '0%, 100%': {
					transform: 'translate(0, 0) scale(1)',
				  },
				  '25%': {
					transform: 'translate(20px, -50px) scale(1.1)',
				  },
				  '50%': {
					transform: 'translate(0, 20px) scale(1)',
				  },
				  '75%': {
					transform: 'translate(-20px, -15px) scale(0.9)',
				  },
				},
				
			  },
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			  },
			  screens: {
				xs: "530px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				xll: "1400px",
				"2xl": "1536px",
			  },
		},
	},
	plugins: [require("@tailwindcss/typography"), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('daisyui')
],
};