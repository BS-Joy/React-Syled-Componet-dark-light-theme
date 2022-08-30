import React from 'react';
import Button from './Button';

const Texts = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="title">
                Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero unde, saepe iure repellat eum
                voluptatum ducimus quia quod. Explicabo illo, ipsam voluptates id molestiae quas consequatur.
                Voluptate fugit voluptatem nulla?
            </p>
            <Button buttonText={'Change Theme'}/>
        </div>
    );
}

export default Texts;
