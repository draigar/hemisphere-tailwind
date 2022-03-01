import * as React from 'react';

import Stats1 from './stats1';
import Stats2 from './stats2';

interface StatisticsProps {
    content: any;
}

const Statistics = (props: StatisticsProps) => {
    const { content } = props;
    const type = content?.type
    return (
        <>
        {type === 'stats1' && <Stats1 content={content} />}
        {type === 'stats2' && <Stats2 content={content} />}
        </>
    );
};

export default Statistics;
