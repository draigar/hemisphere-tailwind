import * as React from 'react';

import { Heading, Text } from 'native-base';

const BlockContent = require('@sanity/block-content-to-react')

interface TextProps {
	content: any;
	textAlign?: any;
	lineHeight?: number | string;
}

export const CustomText = (props: TextProps) => {
	const { content, textAlign, lineHeight } = props;
	const MainText = content;

	const HeadingRenderer = (props) => {
		const { style = 'normal' } = props.node

		if (/^h\d/.test(style)) {
			const level = style.replace(/[^\d]/g, '')
			return (
				<Text
					lineHeight={lineHeight}
					fontSize={textTypeCombo(`h${level}`)}
				>
					{props.children}
				</Text>
			)
			// return React.createElement(style, { className: `heading-${level}` }, props.children)
		}
		if (style === 'title') {
			return (
				<Heading
					fontSize="7xl"
					textAlign={
						textAlign === 'centeredTop'
							? 'center'
							: textAlign === 'centered'
							? 'center'
							: textAlign === 'rightBottom'
							? 'right'
							: textAlign === 'right'
							? 'right'
							: 'left'
					}
				>
					{props.children}
				</Heading>
			);
		}
		if (style === 'normal') {
			return (
				<Text
					lineHeight={lineHeight}
					textAlign={textAlign === 'centeredTop' ? 'center' :
						textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'}
					fontSize={textTypeCombo('p')}
				>
					{props.children}
				</Text>
			)
		}
		// Fall back to default handling
		return BlockContent.defaultSerializers.types.block(props)
	}

	const serializers = {
		types: {
			code: (props) => {
				return (
					<pre data-language={props.node.language}>
						<code>{props.node.code}</code>
					</pre>
				)
			},
			block: HeadingRenderer,
		},
		marks: {
			color: (props) => {
				return <span style={{ color: props.mark.hex }}>{props.children}</span>
			}
		}
	}

	const textTypeCombo = (type: string) => {
		const _type =
			type === 'h1'
				? '6xl'
				: type === 'h2'
					? '5xl'
					: type === 'h3'
						? '4xl'
						: type === 'h4'
							? '3xl'
							: type === 'h5'
								? '2xl'
								: type === 'h6'
									? '1xl'
									: 'md';
		return _type;
	};

	return (
		<>
			<BlockContent blocks={MainText} serializers={serializers} />
		</>
	);
};
