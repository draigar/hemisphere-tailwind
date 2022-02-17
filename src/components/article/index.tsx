import React from 'react'
import Article1 from './article1';

interface props {
    content?: any
}

export default function index(props: props) {
    const { content } = props
    let contactType = content?.type;
    return (
        <>
            {contactType === "article1" && <Article1 content={content} />}
            {/* {contactType === "contact2" && <Contact2 content={content} />} */}
        </>
    )
}