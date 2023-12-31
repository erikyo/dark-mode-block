import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';

/* Block settings */
import blockConfig from '../block.json';

const props = {
	className: 'dark-mode-switch',
};

// Register the custom block
registerBlockType( blockConfig.name, {
	...blockConfig,

	edit() {
		return ( <div { ...useBlockProps( props ) } /> );
	},

	save() {
		return <div { ...useBlockProps.save( props ) } />;
	},
} );
