import * as React from 'react';
import FullBleedGrid from './fullBleedGrid';
import MediumBleedGrid from './mediumBleedGrid'
import NoBleedGrid from './noBleedGrid';

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
            {bleedType === 'full' && <FullBleedGrid content={content} />}
            {bleedType === 'no' && <NoBleedGrid content={content} />}
        </>
    );
};

export default TextImageGrid;
