import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';



function ThankYou () {
    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/');
    }
    return (
        <>
            <h1>Thank You!</h1>
            <Button color="success" className="next-button" onClick={handleSubmit} value="Next" >
                Submit More Feedback
            </Button>
        </>
    )
}

export default ThankYou;