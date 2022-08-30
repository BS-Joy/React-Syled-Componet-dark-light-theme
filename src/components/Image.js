import React from 'react';

const Image = ({ className, source, alterText }) => {
    return (
        <div className={className}>
            <img src={source} alt={alterText} />
        </div>
    );
}

export default Image;
