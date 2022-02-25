import * as React from 'react';
import Carousel1 from './Carousel1';
import Carousel2 from './carousel2';
import Carousel3 from './carousel3';
import Carousel4 from './carousel4';

interface CarouselProps {
    content: any
}

const Carousel = (props: CarouselProps) => {
    const { content } = props;
    const type = content.type;
    console.log('I am Carousel', type)

    return (
        <>
            {type === "carousel1" && <Carousel1 content={content} />}
            {type === "carousel2" && <Carousel2 content={content} />}
            {type === "carousel3" && <Carousel3 content={content} />}
            {type === "carousel4" && <Carousel4 content={content} />}
        </>
    );
};

export default Carousel;
