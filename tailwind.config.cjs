/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				heebo: ['Heebo', 'Verdana', 'sans-serif'],
			},
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem',
			},
			keyframes: {
				scroll: {
					'0%': { left: '0%' },
					'100%': { left: '-100%' },
				},
				scroll_reverse: {
					'0%': { left: '-100%' },
					'100%': { left: '0' },
				},
				spin_logo: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				scroll: 'scroll 10s linear 0s infinite normal',
				scroll_reverse: 'scroll_reverse 10s linear 0s infinite normal',
				spin_logo: 'spin_logo 25s linear 0s infinite normal',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [],
}
