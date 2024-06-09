import React from 'react';
import { getCat } from '../Utils';

const RandomCat = ({ updateImage, setIsLoading }) => {

    return (
        <button onClick={() => getCat('https://cataas.com/cat', updateImage, setIsLoading)}>RANDOM CAT</button>
    );
}

export default RandomCat;
