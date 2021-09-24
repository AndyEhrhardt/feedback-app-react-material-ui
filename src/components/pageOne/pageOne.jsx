import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../App/PageStyle.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageOne() {
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (feelingRating === "") { //confirms something has been entered in the input 
            alert("Please Enter A Rating")
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
                    label="Rate"
                    variant="standard"
                    onChange={(event) => setFeelingRating(event.target.value)}
                    value={feelingRating}
                    type="number"
                />
                <br />
                <div className="input-container">
                    <Button variant="contained" color="success" className="next-button" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>

        </>
    )
}

export default PageOne;