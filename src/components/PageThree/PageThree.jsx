import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function PageThree() {
    const history = useHistory();
    const [supportRating, setSupportRating] = useState(0);
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.responseReducer);
    const [whichFade, setWhichFade] = useState(true);

    useEffect(() => {
        previousEntryCheck()
    }, []);

    const previousEntryCheck = () => {
        feedback.support && setSupportRating(feedback.support);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (supportRating === "" || supportRating > 5 || supportRating < 1) {
            alert("Please Enter a Rating of 1-5")
        } else {
            dispatch({ type: 'SUPPORT', payload: supportRating });
            setWhichFade(false);
            setTimeout(() => {history.push('/pageFour')}, 230);
        }
    }
    const goBack = (event) => {
        event.preventDefault();
        dispatch({ type: 'SUPPORT', payload: supportRating });
        setWhichFade(false);
        setTimeout(() => {history.push('/pageTwo')}, 230);
    }
    function valuetext(value) { //displays the number selected on the slider
        return `${value}`;
    }
    return (  
        <Paper  elevation="11" variant="elevation" className={whichFade ? ("fade-in feedback-wrap"): ("fade-out feedback-wrap")}>            
            <Typography variant="h4" component="h3" id="animation-feedback">
                How cool are the animations on this app? 
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
                            value={supportRating} /* Will set the slider to previous rating if user navigates back to page */
                            valueLabelDisplay={valuetext}
                            onChange={(event) => setSupportRating(event.target.value)}
                            step={1}
                            marks
                            min={0}
                            max={5}
                        />
                    </Box>
                </div>
                <div className="button-container">
                    <Button className="previous-button" id="threeBack" onClick={goBack} value="Next" >
                        Previous
                    </Button>
                    <Button color="success" className="next-button" id="threeNext" type="submit" value="Next" >
                        Next
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default PageThree;