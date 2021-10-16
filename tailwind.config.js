module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'Bebas+Neue': ['"Bebas Neue"', 'cursive'],
			Roboto: ['"Roboto"', 'sans-serif'],
		},
		extend: {
			colors: {
				'body-bg': '#15161b',
				'header-text': '#fbfbfc',
				'searchbox-text': '#afaeb6',
				'searchbox-border': '#b4b4ba',
				'searchbuttton-bg': '#007ee9',
				'searchbutton-text': '#d0effb',
				'searchbutton-border': '#085495',
				'card-bg': '#1d232f',
				'card-text': '#c1c3cf',
				'filter-color': '#ecedef',
				'filter-bg': '#8c8e95',
				'gray-1': '#70737b',
				'gray-2': '#80858f',
				'gray-3': '#414651',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
