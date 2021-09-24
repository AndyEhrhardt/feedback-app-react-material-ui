import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageTwo() {
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understandingRating === "") {
            alert("Please Enter A Rating")
        } else {
            dispatch({ type: 'UNDERSTANDING', payload: understandingRating });
            history.push('/pageThree');
        }
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

                <div className="input-container">
                    <Button variant="contained" color="success" className="next-button" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PageTwo;