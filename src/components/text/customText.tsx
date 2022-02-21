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
    const MainText = content?.text !== undefined ? content?.text : content;

    const isAnimationEnabled = content?.isAnimationEnabled
    const animationDelay = content?.animation?.animationDelay
    const animationDuration = content?.animation?.animationDuration
    const animationName = content?.animation?.animationName
    const animationOffset = content?.animation?.animationOffset

    const HeadingRenderer = (props: any) => {
        const { style = 'normal' } = props.node

        if (/^h\d/.test(style)) {
            const level = style.replace(/[^\d]/g, '')
            return (
                <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
                    data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
                    <span style={{
                        lineHeight: lineHeight,
                        textAlign: textAlign === 'centeredTop' ? 'center' :
                            textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'
                    }} className={`${classNames} ${textTypeCombo(`h${level}`)}`}>
                        {props.children}
                    </span>
                </div>
            )
            // return React.createElement(style, { className: `heading-${level}` }, props.children)
        }
        if (style === 'title') {
            return (
                <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
                    data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
                    <h1 className={`${classNames} text-3xl sm:text-5xl md:text-7xl font-bold`} style={{
                        textAlign: textAlign === 'centeredTop' ? 'center' :
                            textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'
                    }}>
                        {props.children}
                    </h1>
                </div>
            )
        }
        if (style === 'normal') {
            return (
                <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
                    data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
                    <p
                        className={`${classNames} ${textTypeCombo(`p`)}`}
                        style={{
                            lineHeight: lineHeight, textAlign: textAlign === 'centeredTop' ? 'center' :
                                textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'
                        }}
                    >
                        {props.children}
                    </p>
                </div>
            )
        }
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props)
    }

    const serializers = {
        types: {
            code: (props: any) => {
                return (
                    <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
                        data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
                        <pre data-language={props.node.language}>
                            <code>{props.node.code}</code>
                        </pre>
                    </div>
                )
            },
            block: HeadingRenderer,
        },
        marks: {
            color: (props: any) => {
                return <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
                    data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}><span style={{ color: props.mark.hex }}>{props.children}</span></div>
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

    const NormalText = () => (
        <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
            data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
            <p
                className={`${classNames !== undefined && classNames} ${textTypeCombo(`p`)}`}
                style={{
                    lineHeight: lineHeight, textAlign: textAlign === 'centeredTop' ? 'center' :
                        textAlign === 'centered' ? 'center' : textAlign === 'rightBottom' ? 'right' : textAlign === 'right' ? 'right' : 'left'
                }}
            >
                {animationName}
                {MainText}
            </p>
        </div>
    )

    return (
        <>
            {typeof MainText === 'object' ?
                <BlockContent blocks={MainText} serializers={serializers} />
                : <NormalText />}
        </>
    );
};

export default CustomText