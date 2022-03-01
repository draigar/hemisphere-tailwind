import * as React from 'react';

import TextCardOverflow from './textcardoverflow';
import TextCardOverflow2 from './textcardoverflow2';

interface TextCardAndOverflowProps {
    content: any
}

const TextCardAndOverflow = (props: TextCardAndOverflowProps) => {
    const { content } = props;
    const type = content.type;
    return (
        <>
            {type === "section2" && <TextCardOverflow content={content} />}
            {type === "cta1" && <TextCardOverflow2 content={content} />}
        </>
    );
};

export default TextCardAndOverflow;
