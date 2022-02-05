import * as React from 'react';

interface ImageVideoBgComponentProps {
    content: any;
}

const ImageVideoBgComponent = (props: ImageVideoBgComponentProps) => {
    const { content } = props;

    const heading = content.heading
    const backgroundType = content.background.type
    const backgroundVideo = content.background.backgroundVideo?.videoFile?.asset?._ref
    const backgroundImage = content.background.backgroundImage?.asset?._ref
    const backgroundColor = content.background.backgroundColor
    const tagline = content.tagline.text
    const textAlign = content.textAlign
    const isTaglineEnabled = content.isTaglineEnabled
    const isCTAEnabled = content.isCTAEnabled
    const buttonType = content.buttonType
    const headingText = heading.text
    const headingLengthSize = heading.lengthSize?.size
    const taglineLengthSize = content.tagline.lengthSize?.size

    const colorCombo = (_color: any) => {
        const colorClass = _color?.colorClass;
        const brand = _color?.brand;
        const neutral = _color?.neutral;
        const black = _color?.black;
        const primary = _color?.primary;
        const colors =
            colorClass === 'brand'
                ? `brand.${brand}`
                : colorClass === 'neutral'
                    ? `neutral.${neutral}`
                    : colorClass === 'primary'
                        ? `primary.${primary}`
                        : colorClass === 'black'
                            ? `black.${black}`
                            : 'white';
        return colors;
    };

    console.log(content)

    return (
        <div className="h-6/6 bg-teal-600 p-4">
            <div className={`flex flex-col ${textAlign}`}>
                <h1>Amaka, Ben, and Kosi Supernatural Hemp</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus
                </p>
            </div>
        </div>
    );
};

export default ImageVideoBgComponent;
