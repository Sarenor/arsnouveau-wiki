const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('@brainandbones/skeleton/tailwind.cjs')]
};

module.exports = config;
