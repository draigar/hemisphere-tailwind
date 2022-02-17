import React from 'react'
import Contact1 from './contact1';
import Contact2 from './contact2';

interface props {
    content?: any
}

export default function index(props: props) {
    const { content } = props
    let contactType = content?.type;
    return (
        <>
            {contactType === "contact1" && <Contact1 content={content} />}
            {contactType === "contact2" && <Contact2 content={content} />}
        </>
    )
}