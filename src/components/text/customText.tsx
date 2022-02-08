import * as React from 'react';

const BlockContent = require('@sanity/block-content-to-react')

interface TextProps {
    content: any;
    textAlign?: any;
    lineHeight?: number | string;
    classNames?: string;
}

const CustomText = (props: TextProps) => {
    const { content, textAlign, lineHeight, classNames } = props;
    const MainText = content;

    const HeadingRenderer = (props: any) => {
        const { style = 'normal' } = props.node

        if (/^h\d/.test(style)) {
            const level = style.replace(/[^\d]/g, '')
            return (
                <span style={{ lineHeight: lineHeight}} className={`${classNames} ${textTypeCombo(`h${level}`)}`}>
                    {props.children}
                </span>
            )
            // return React.createElement(style, { className: `heading-${level}` }, props.children)
        }
        if (style === 'title') {
            return (
                <h1 className={`${classNames} text-3xl sm:text-5xl md:text-7xl font-bold`} style={{
                    textAlign: textAlign === 'centeredTop' ? 'center' :
                        textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'
                }}>
                    {props.children}
                </h1>
            )
        }
        if (style === 'normal') {
            return (
                <p
                    className={`${classNames} ${textTypeCombo(`p`)}`}
                    style={{
                        lineHeight: lineHeight, textAlign: textAlign === 'centeredTop' ? 'center' :
                            textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'
                    }}
                >
                    {props.children}
                </p>
            )
        }
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props)
    }

    const serializers = {
        types: {
            code: (props: any) => {
                return (
                    <pre data-language={props.node.language}>
                        <code>{props.node.code}</code>
                    </pre>
                )
            },
            block: HeadingRenderer,
        },
        marks: {
            color: (props: any) => {
                return <span style={{ color: props.mark.hex }}>{props.children}</span>
            }
        }
    }

    const textTypeCombo = (type: string) => {
        const _type =
            type === 'h1'
                ? 'text-6xl'
                : type === 'h2'
                    ? 'text-5xl'
                    : type === 'h3'
                        ? 'text-4xl'
                        : type === 'h4'
                            ? 'text-3xl'
                            : type === 'h5'
                                ? 'text-2xl'
                                : type === 'h6'
                                    ? 'text-1xl'
                                    : 'text-md';
        return _type;
    };

    return (
        <>
            <BlockContent blocks={MainText} serializers={serializers} />
        </>
    );
};

export default CustomText