import React, {useState, useEffect} from 'react';
import {Box, Grid} from '@material-ui/core';
import QuestionCard from "./question-card";
import Result from "./result";

function TestView() {
    const [testQuestions, setTestQuestions] = useState([]);
    const [testResult, setTestResult] = useState(null);
    const [testCompleted, setTestCompleted] = useState(false);

    const [currentValue, setCurrentValue] = useState(null);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const [activeQuestion, setActiveQuestion] = useState(1);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        fetch('api/get-questions')
            .then(res => res.json())
            .then(json => setTestQuestions(json.data))
    }, [])

    const handleRadioChange = (event) => {
        const value = parseInt(event.target.value);
        setCurrentValue(value);
        setAnswers({...answers, [activeQuestion - 1]: value});
        setHelperText(' ');
        setError(false);
    };

    const onClickNext = (event) => {
        event.preventDefault();

        if(currentValue === null || currentValue === undefined) {
            setHelperText('Please select an option.');
            setError(true);
        } else {
            if (activeQuestion < testQuestions.length) {
                setCurrentValue(null);
                setActiveQuestion(activeQuestion + 1);
            } else {
                submitResults();
            }
        }
    };

    const submitResults = () => {
        fetch('api/get-personality-trait')
            .then(res => res.json())
            .then(json => { setTestResult(json); setTestCompleted(true)})
    }

    return (
        <div className='main'>
            {!testCompleted &&
            <Box display="flex" alignItems='center' align="center" height={1}>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6} className='margin-bottom-50'>
                        {testQuestions && testQuestions.length > 0 &&
                            <QuestionCard
                                onClickNext={onClickNext}
                                error={error}
                                currentValue={currentValue}
                                activeQuestion={activeQuestion}
                                handleRadioChange={handleRadioChange}
                                helperText={helperText}
                                data={testQuestions[activeQuestion - 1]}
                                totalNumberOfQuestions={testQuestions.length}
                            />
                        }
                    </Grid>
                    <Grid item xs={3}/>
                </Grid>
            </Box>
            }
            {testCompleted &&
            <Result
                data={testResult}
            />
            }
        </div>
    );
}

export default TestView;
