import React from 'react';
import { CircularProgress } from '@mui/material'
import './Canvas.css'
import { useQuery } from '@tanstack/react-query';
import { getCat } from '../Utils';

const Canvas = ({ url }) => {

    const { isLoading, isFetching, error, data } = useQuery({
        queryKey: ['cat', url],
        queryFn: () => getCat(url),
        refetchOnWindowFocus: false
    })

    return (
        <div className='canvas-container'>
            {
                error ?
                    <p>error getting image</p>
                    :        
                    isLoading || isFetching ? <CircularProgress/> : <img src={data} alt='cat'></img>
            }
        </div>
    );
}

export default Canvas;
