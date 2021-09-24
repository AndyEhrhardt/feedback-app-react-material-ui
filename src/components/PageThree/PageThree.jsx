import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageThree() {
    const history = useHistory();
    const [supportRating, setSupportRating] = useState('');
    const dispatch = useDispatch();



    const handleSubmit = (event) => {
        event.preventDefault();
        if (supportRating === "") {
            alert("Please Enter a Rating")
        } else {
            dispatch({ type: 'SUPPORT', payload: supportRating });
            history.push('/pageFour');
        }
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

                <div className="input-container">
                    <Button variant="contained" color="success" className="next-button" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PageThree;