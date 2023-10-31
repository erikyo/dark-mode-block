const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		/** admin scripts */
		'dark-mode-editor': path.resolve(
			process.cwd(),
			`src/index.js`
		),
		/** frontend scripts */
		'dark-mode': path.resolve(
			process.cwd(),
			`src/dark-mode-block.js`
		),
	},
};
