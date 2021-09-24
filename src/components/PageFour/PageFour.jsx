import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PageFour() {
    const history = useHistory();
    const [comment, setComment] = useState('');
    const [flagged, setFlagged] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(flagged)
        dispatch({ type: 'COMMENT', payload: { comment: comment, flagged: flagged } });
        history.push('/review');
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Comments"
                    variant="standard"
                    onChange={(event) => setComment(event.target.value)}
                    value={comment}
                    type="text"
                />
                <input type="checkbox" checked={flagged} name="flagged" onChange={(event) => {
                    event.preventDefault;
                    flagged ? setFlagged(false) : setFlagged(true)
                }} />
                <label> I would like to request a 1:1</label>
                <div className="input-container">
                    <Button variant="contained" color="success" className="next-button" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PageFour;