module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        pink: {
          // 50: '#fdf8f6',
          // 100: '#f2e8e5',
          // 200: '#eaddd7',
          // 300: '#e0cec7',
          // 400: '#d2bab0',
          500: '#FF80CA',
          600: '#CC5299',
          700: '#992E6C',
          800: '#661444',
          900: '#330520',
        },
      },
      fontFamily: {
        sans: [
          '"Baloo 2"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
      },
    },
	},
	plugins: [],
}


// https://palettte.app/
// [
//   {
//     "paletteName": "New Palette",
//     "swatches": [
//       {
//         "name": "New Swatch",
//         "color": "330520"
//       },
//       {
//         "name": "New Swatch",
//         "color": "661444"
//       },
//       {
//         "name": "New Swatch",
//         "color": "992E6C"
//       },
//       {
//         "name": "New Swatch",
//         "color": "CC5299"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FF80CA"
//       }
//     ]
//   }
// ]