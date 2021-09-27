import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function PageTwo() {
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState(0);
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.responseReducer);
    const [whichFade, setWhichFade] = useState(true);

    useEffect(() => {
        previousEntryCheck()
    }, []);

    const previousEntryCheck = () => {
        feedback.understanding && setUnderstandingRating(feedback.understanding);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understandingRating === "" || understandingRating < 1 || understandingRating > 5) {
            alert("Please Enter A Rating of 1-5")
        } else {
            dispatch({ type: 'UNDERSTANDING', payload: understandingRating });
                setWhichFade(false);
                setTimeout(() => {history.push('/pageThree')}, 230);
        }
    }
    const goBack = (event) => {
        event.preventDefault();
        dispatch({ type: 'UNDERSTANDING', payload: understandingRating });
        setWhichFade(false);
        setTimeout(() => {history.push('/')}, 230);
    }

    function valuetext(value) { //displays the number selected on the slider
        return `${value}`;
    }

    return (
        <>  
            <Paper  elevation="11" variant="elevation" className={whichFade ? ("fade-in feedback-wrap"): ("fade-out feedback-wrap")}>           
                <Typography variant="h4" component="h3">
                    How would you rate your coding skills?
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6" component="h3">
                        Rate 1-5
                    </Typography>
                    <br>
                    </br>
                    <br>
                    </br>
                    <div className="slider-container">
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Rating"
                                value={understandingRating} /* Will set the slider to previous rating if user navigates back to page */
                                valueLabelDisplay={valuetext}
                                onChange={(event) => setUnderstandingRating(event.target.value)}
                                step={1}
                                marks
                                min={0}
                                max={5}
                            />
                        </Box>
                    </div>
                    <div className="button-container">
                        <Button className="previous-button" onClick={goBack} value="Next" >
                            Previous
                        </Button>
                        <Button color="success" className="next-button"  type="submit" value="Next" >
                            Next
                        </Button>
                    </div>
                </form>
            </Paper>
        </>
    )
}

export default PageTwo;