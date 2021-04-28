import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        marginBottom: '15px'
    },
});

export const SummaryBox = ({
    question,
    answer
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardContent>
                <Box>
                    <Typography color="textSecondary">
                        {question}
                    </Typography>
                    <Typography>
                        {answer}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};