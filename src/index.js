import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';

/* Block settings */
import blockConfig from '../block.json';

// Register the custom block
registerBlockType( blockConfig.name, {
	...blockConfig,

	edit() {
		return ( <div { ...useBlockProps() }><input type={'checkbox'} className={'dark-mode-checkbox'} onClick={() => document.documentElement.classList.toggle( 'dark-mode' )} /></div> );
	},

	save() {
		return <div { ...useBlockProps.save() }><input type={'checkbox'} className={'dark-mode-checkbox'} onclick="document.documentElement.classList.toggle('dark-mode');"/></div>;
	},
} );
