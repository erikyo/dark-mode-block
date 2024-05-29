import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import {props} from './constants';
import {shadow} from "@wordpress/icons";
import {ColorPalette, PanelBody, PanelRow, SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {useSelect} from '@wordpress/data';

function ColorControl({value, setColor}) {
	return (
		<ColorPalette
			colors={colors}
			value={value}
			onChange={(color) => setColor(color)}
		/>
	);
}

export function edit({attributes, setAttributes}) {
	// get the template colors using wp data
	const templateColors = useSelect('core/block-editor', []).getSettings()?.colors ?? [];

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="dark-mode">
				<PanelBody
					title={__('Options', 'dark-mode-block')}
					icon={shadow}
					initialOpen={true}
				>
					<PanelRow>
						<SelectControl
							label={__('Dark Color', 'dark-mode-block')}
							value={attributes.darkColor}
							options={templateColors.map(color => ({label: color.name, value: color.slug}))}
							onChange={(value) => setAttributes({darkColor: value})}
						/>
					</PanelRow>
					<SelectControl
						label={__('Background Variable to replace', 'dark-mode-block')}
						value={attributes.backgroundVar}
						options={templateColors.map(color => ({label: color.name, value: color.color}))}
						onChange={(value) => setAttributes({backgroundVar: value})}
					/>
					<PanelRow>
						<SelectControl
							label={__('Light Color', 'dark-mode-block')}
							value={attributes.lightColor}
							options={templateColors.map(color => ({label: color.name, value: color.slug}))}
							onChange={(value) => setAttributes({lightColor: value})}
						/>
					</PanelRow>
					{/**
					 * @todo: add text control for text color
					 */}
				</PanelBody>
			</InspectorControls>
			<div className={props.className}></div>
		</div>)
		;
}
