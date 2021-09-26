import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function PageOne() {
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState(0); //by default the slider is set to zero, forcing the user to choose a number 
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
    function valuetext(value) { //displays the number selected on the slider
        return `${value}`;
    }
    return (
        <>
            <Typography variant="h4" component="h3">
                How are you feeling today?
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
                            value={feelingRating} /* Will set the slider to previous rating if user navigates back to page */
                            valueLabelDisplay={valuetext}
                            onChange={(event) => setFeelingRating(event.target.value)}
                            step={1}
                            marks
                            min={0}
                            max={5}
                        />
                    </Box>
                </div>
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