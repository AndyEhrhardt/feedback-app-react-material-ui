import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.responseReducer)

    console.log(feedback)
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/responses', feedback).then(response => {
            console.log(response);
            dispatch({ type: 'CLEAR' });
            history.push('/thankYou');
        }).catch(error => {
            console.log(error);
        })
    }
    const goBack = (event) => {
        event.preventDefault();
        history.push('/pageFour');
    }

    return (
        <>
            <div>
                <Typography variant="h4" component="h3">
                Review Your Feedback
                </Typography>
                <Typography variant="h6" component="h3">
                Feeling: {feedback.feeling}
                </Typography>
                <Typography variant="h6" component="h3">
                Understanding: {feedback.understanding}
                </Typography>
                <Typography variant="h6" component="h3">
                Support: {feedback.support}
                </Typography>
                <Typography variant="h6" component="h3">
                Comments: {feedback.comments}
                </Typography>
                {feedback.one && (<Typography variant="h6" component="h3">You have requested a 1:1 </Typography>)}
                <div className="button-container">
                    <Button className="previous-button" onClick={goBack} value="Next" >
                        Previous
                    </Button>
                    <Button color="success" className="next-button" onClick={handleSubmit} value="Next" >
                        Submit
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Review;