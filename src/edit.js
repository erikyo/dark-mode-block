import { useBlockProps } from '@wordpress/block-editor';
import { props } from './constants';

export function edit() {
	return ( <div {...useBlockProps( props )} /> );
}
