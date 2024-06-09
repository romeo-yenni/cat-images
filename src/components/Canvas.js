import React from 'react';
import './Canvas.css';
import Loading from './Loading';

const Canvas = ({ image, isLoading }) => {
    return (
        <div>
            {
                image ?
                    isLoading ? <Loading /> : <img src={image} alt='cat'></img>
                    :
                    <p>get a cat </p>
            }
        </div>
    );
}

export default Canvas;
