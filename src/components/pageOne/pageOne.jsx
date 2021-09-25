import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageOne() {
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.responseReducer);

    useEffect(() => {
        previousEntryCheck()
    }, []);

    const previousEntryCheck = () => { //checks if something was entered previously and sets the variable to that value 
        feedback.feeling && setFeelingRating(feedback.feeling);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feelingRating === "" || feelingRating < 1 || feelingRating > 5) { //confirms something has been entered in the input 
            alert("Please Enter A Rating of 1-5")
        } else {
            dispatch({ type: 'FEELING', payload: feelingRating }) //sends information to reducer
            history.push('/pageTwo'); //Navigates user to the next page 
        }
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Rate 1-5"
                    variant="standard"
                    onChange={(event) => setFeelingRating(event.target.value)}
                    value={feelingRating}
                    type="number"
                />
                <br />
                <div className="button-container">
                    <Button color="success" className="next-button" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PageOne;