import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import {Button, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import Card from "@material-ui/core/Card";

const QuestionCard = ({onClickNext, error, currentValue, handleRadioChange, helperText, data, activeQuestion, totalNumberOfQuestions}) => <Card>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>
            QUESTION {activeQuestion} OF {totalNumberOfQuestions}
        </Typography>
        <Typography variant="h5" component="h2">
            {data.question}
        </Typography>
        <form onSubmit={onClickNext}>
            <FormControl component="fieldset" error={error}>
                <RadioGroup aria-label="quiz" name="quiz" value={currentValue} onChange={handleRadioChange}>
                    {data.answers.map((answer, index)=> {
                        return (
                            <FormControlLabel key={index} value={answer.id} control={<Radio />} label={answer.label} className='align-left'/>
                        );
                    })}
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type="submit" variant="outlined" color="primary" className='margin-top-20'>
                    {(activeQuestion < totalNumberOfQuestions) ? 'Next' : 'Finish'}
                </Button>
            </FormControl>
        </form>
    </CardContent>
</Card>

export default QuestionCard;