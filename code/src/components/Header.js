import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '100px',
        textShadow: '2px 2px #5d5d5d'
    },
});

export const Header = () => {
    const classes = useStyles();

    return (
        <Typography variant="h2" className={classes.header}>
            Pokémon Survey
        </Typography>
    );
};