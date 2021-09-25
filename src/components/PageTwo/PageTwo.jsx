import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageTwo() {
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState('');
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.responseReducer);
    
    useEffect(() => {
        previousEntryCheck()
    },[]);

    const previousEntryCheck = () => {
        feedback.understanding && setUnderstandingRating(feedback.understanding);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understandingRating === "") {
            alert("Please Enter A Rating")
        } else {
            dispatch({ type: 'UNDERSTANDING', payload: understandingRating });
            history.push('/pageThree');
        }
    }
    const goBack = (event) => {
        event.preventDefault();
        history.push('/');
    }
    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Rate"
                    variant="standard"
                    onChange={(event) => setUnderstandingRating(event.target.value)}
                    value={understandingRating}
                    type="number"
                />

                <div className="button-container">
                    <Button className="previous-button" onClick={goBack} value="Next" >
                        Previous
                    </Button>
                    <Button color="success" className="next-button" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PageTwo;