import * as React from 'react';

interface WhitespaceProps {
    content?: any;
}

const Whitespace = (props: WhitespaceProps) => {
    const { content } = props;
    const size = content?.size.size

    const mSize = () => {
        return size === 'lg' ? '50px' : size === 'md' ? '30px' : 
        size === 'sm' ? '20px' : size === 'xl' ? '70px' : size === 'xxl' ? '100px' : 
        size === 'xs' ? '10px' : size === 'xxs' ? '5px' : '20px'
    };

    const styles = {
        margin: `${mSize()} auto`
    }
    return (
        <div style={styles}></div>
    );
};

export default Whitespace;
