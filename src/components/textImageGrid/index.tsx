import * as React from 'react';
import MediumBleedGrid from './mediumBleedGrid'

interface TextImageGridProps {
    content: any
}

const TextImageGrid = (props: TextImageGridProps) => {
    const { content } = props;
    const bleedType = content?.bleedType
    console.log('from here', content)
    return (
        <>
            {bleedType === 'medium' && <MediumBleedGrid content={content} />}
        </>
    );
};

export default TextImageGrid;
