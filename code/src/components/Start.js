import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        textAlign: 'center'
    },
});

export const Start = ({updatePageNumber}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => updatePageNumber(1)}>
                Start survey
            </Button>
        </Box>
    );
};