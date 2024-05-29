import { registerBlockType } from '@wordpress/blocks';
import { shadow } from '@wordpress/icons';

import './style.scss';

/* Block settings */
import blockConfig from '../block.json';
import { edit } from './edit';
import { save } from './save';

// Register the custom block
registerBlockType( blockConfig.name, {
	...blockConfig,
	icon: shadow,
	edit,
	save,
} );

