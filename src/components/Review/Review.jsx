import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.responseReducer)
    const [whichFade, setWhichFade] = useState(true);

    console.log(feedback)
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/responses', feedback).then(response => {
            console.log(response);
            setWhichFade(false);
            setTimeout(() => {clearAndNextPage()}, 230);
        }).catch(error => {
            console.log(error);
        })
    }
    const clearAndNextPage = () => {
        dispatch({ type: 'CLEAR' })
        history.push('/thankYou')
    }
    const goBack = (event) => {
        event.preventDefault();
        setWhichFade(false);
        setTimeout(() => {history.push('/pageFour')}, 230);
    }

    return (
        <>
            <Paper  elevation="11" variant="elevation" className={whichFade ? ("fade-in feedback-wrap"): ("fade-out feedback-wrap")}>      
                <div>
                    <Typography variant="h4" component="h3">
                    Review Your Feedback
                    </Typography>
                    <br></br>
                    <Typography variant="h6" component="h3">
                    Feeling: {feedback.feeling}
                    </Typography>
                    <Typography variant="h6" component="h3">
                    Understanding: {feedback.understanding}
                    </Typography>
                    <Typography variant="h6" component="h3">
                    Support: {feedback.support}
                    </Typography>
                    <Typography variant="h6" component="h3">
                    Comments: {feedback.comments}
                    </Typography>
                    {feedback.one && (<Typography variant="h6" component="h3">You enjoy coding! </Typography>)}
                    <div className="button-container">
                        <Button className="previous-button" onClick={goBack} value="Next" >
                            Previous
                        </Button>
                        <Button color="success" className="next-button" onClick={handleSubmit} value="Next" >
                            Submit
                        </Button>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default Review;