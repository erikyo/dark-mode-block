import { useBlockProps } from '@wordpress/block-editor';
import { props } from './constants';

export function save() {
	return <div {...useBlockProps.save( props )} />;
}
