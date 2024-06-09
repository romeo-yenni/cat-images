import React from 'react';
import { Button } from '@mui/material';

const RandomCat = ({ handleRandomCat }) => {

    return (
        <Button 
            onClick={handleRandomCat}
            variant="contained" 
            color="primary">
                RANDOM CAT
        </Button>
    );
}

export default RandomCat;
