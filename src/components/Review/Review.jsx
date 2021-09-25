import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';

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
            <h1>Review Your Feedback</h1>
            <h3>Feeling: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            {feedback.one && (<h3>You have requested a 1:1</h3>)} 
            <div className="button-container">
                <Button className="previous-button" onClick={goBack} value="Next" >
                            Previous
                </Button>
                <Button color="success" className="next-button" onClick={handleSubmit} value="Next" >
                    Submit
                </Button>
            </div>
        </>
    )
}

export default Review;