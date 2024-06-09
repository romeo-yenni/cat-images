import React from 'react';
import { CircularProgress } from '@mui/material'
import './Canvas.css'

const Canvas = ({ image, isLoading }) => {
    return (
        <div className='canvas-container'>
            {
                image ?
                    isLoading ? <CircularProgress/> : <img src={image} alt='cat'></img>
                    :
                    isLoading ? <CircularProgress/> : <p>get a cat </p>
            }
        </div>
    );
}

export default Canvas;
