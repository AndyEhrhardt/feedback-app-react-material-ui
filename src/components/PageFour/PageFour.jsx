import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


function PageFour() {
    const history = useHistory();
    const [comment, setComment] = useState('');
    const [one, setOne] = useState(false);
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.responseReducer);
    
    useEffect(() => {
        previousEntryCheck()
    },[]);

    const previousEntryCheck = () => {
        feedback.comments && setComment(feedback.comments);
        feedback.one && setOne(feedback.one);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(one)
        dispatch({ type: 'COMMENT', payload: { comment: comment, one: one } });
        history.push('/review');
    }
    const goBack = (event) => {
        event.preventDefault();
        dispatch({ type: 'COMMENT', payload: { comment: comment, one: one } });
        history.push('/pageThree');
    }
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <div className="textcheckbox-wrapper">
                    <TextField
                        id="standard-basic"
                        label="Comments"
                        variant="standard"
                        onChange={(event) => setComment(event.target.value)}
                        value={comment}
                        type="text"
                    />
                    <div className="checkbox">
                        <Checkbox 
                            label="I would like to request a 1:1" 
                            onChange={(event) => {
                                event.preventDefault;
                                one ? setOne(false) : setOne(true)
                            }}
                            checked={one}
                        />
                    </div>
                    <label> I would like to request  a 1:1</label>
                </div>
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

export default PageFour;