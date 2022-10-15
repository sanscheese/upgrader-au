module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        pink: {
          50: '#FFD9EE',
          100: '#FFD9EE',
          200: '#FFA4D6',
          300: '#FF73C0',
          400: '#FF45AB',
          500: '#FF1795',
          600: '#CF147A',
          700: '#990F5A',
          800: '#660A3C',
          900: '#33051E',
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
//         "color": "33051E"
//       },
//       {
//         "name": "New Swatch",
//         "color": "660A3C"
//       },
//       {
//         "name": "New Swatch",
//         "color": "990F5A"
//       },
//       {
//         "name": "New Swatch",
//         "color": "CF147A"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FF1795"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FF45AB"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FF73C0"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FFA4D6"
//       },
//       {
//         "name": "New Swatch",
//         "color": "FFD9EE"
//       }
//     ]
//   }
// ]