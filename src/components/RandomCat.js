import React from 'react';
import { Button } from '@mui/material';

const RandomCat = ({ handleNewCat }) => {

    return (
        <Button 
            onClick={handleNewCat}
            variant="contained" 
            color="primary">
                RANDOM CAT
        </Button>
    );
}

export default RandomCat;
