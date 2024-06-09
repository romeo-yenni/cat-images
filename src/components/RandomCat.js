import React from 'react';
import { getCat } from '../Utils';
import { Button } from '@mui/material';

const RandomCat = ({ updateImage, setIsLoading }) => {

    return (
        <Button 
            onClick={() => getCat('https://cataas.com/cat', updateImage, setIsLoading)} 
            variant="contained" 
            color="primary">
                RANDOM CAT
        </Button>
    );
}

export default RandomCat;
