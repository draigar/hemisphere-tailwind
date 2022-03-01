import Newsletter1 from './newsletter1';
import Newsletter2 from './newsletter2';
import Newsletter3 from './newsletter3';
import React from 'react'

interface props {
    content?: any
}

export default function index(props: props) {
    const { content } = props
    let newsletterType = content?.type;
    return (
        <>
            {newsletterType === "newsletter1" && <Newsletter1 content={content} />}
            {newsletterType === "newsletter2" && <Newsletter2 content={content} />}
            {newsletterType === "newsletter3" && <Newsletter3 content={content} />}
        </>
    )
}