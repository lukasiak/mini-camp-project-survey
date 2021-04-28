import React from 'react';
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonContainer: {
        textAlign: 'right'
    },
  });

export const Question = ({
    questionId, 
    questionText, 
    questionOptions,
    isLastQuestion,
    updatePageNumber,
    updateShowSummaryPage,
    updateReply}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    const handleContinue = () => {
        updateReply(parseInt(questionId), value)
        updatePageNumber(parseInt(questionId) + 1);
    };

    const handleSubmit = () => {
        updateReply(parseInt(questionId), value)
        updateShowSummaryPage(true);
    };

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary">
                    {questionId}. {questionText}
                </Typography>
                <FormControl component="fieldset">
                    {
                        questionOptions ? (
                            <RadioGroup aria-label={questionId} name={questionId} value={value} onChange={handleValueChange}>
                                {
                                    questionOptions.map((option, index) => {
                                        return (
                                            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                                        )
                                    })
                                }
                            </RadioGroup>
                        ) : (
                            <TextField id="standard-basic" label="Pokemon" onChange={handleValueChange} />
                        )
                    }
                    
                </FormControl>
                <Box className={classes.buttonContainer}>
                {
                    !isLastQuestion ? (
                        <Button variant="contained" color="primary" onClick={handleContinue}>Continue</Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                    )
                }
                </Box>
            </CardContent>
        </Card>
    );
};