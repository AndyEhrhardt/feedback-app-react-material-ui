import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageThree() {
    const history = useHistory();
    const [supportRating, setSupportRating] = useState('');
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.responseReducer);
    
    useEffect(() => {
        previousEntryCheck()
    },[]);

    const previousEntryCheck = () => {
        feedback.support && setSupportRating(feedback.support);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (supportRating === "" || supportRating > 5 || supportRating < 1 ) {
            alert("Please Enter a Rating of 1-5")
        } else {
            dispatch({ type: 'SUPPORT', payload: supportRating });
            history.push('/pageFour');
        }
    }
    const goBack = (event) => {
        event.preventDefault();
        dispatch({ type: 'SUPPORT', payload: supportRating });
        history.push('/pageTwo');
    }
    return (
        <>
            <h1>How well are you being supported? </h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Rate"
                    variant="standard"
                    onChange={(event) => setSupportRating(event.target.value)}
                    value={supportRating}
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

export default PageThree;