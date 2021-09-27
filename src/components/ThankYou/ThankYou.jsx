import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';

function ThankYou() {
    const history = useHistory();
    const [whichFade, setWhichFade] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setWhichFade(false);
        setTimeout(() => history.push('/'), 230);
    }
    return (  
        <Paper  elevation="11" variant="elevation" className={whichFade ? ("fade-in feedback-wrap"): ("fade-out feedback-wrap")}>  
                <div id="thank-you-wrap">
                    <div>
                        <Typography variant="h4" component="h3">
                            Thank You!
                        </Typography>
                    </div>
                    <div className="button-container">
                        <Button color="success" className="next-button" onClick={handleSubmit} value="Next" >
                            Submit More Feedback
                        </Button>
                    </div>
                </div>
        </Paper>
    )
}

export default ThankYou;