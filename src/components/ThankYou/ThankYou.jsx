import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function ThankYou() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/');
    }
    return (
        <>  
            <Typography variant="h4" component="h3">
                Thank You!
            </Typography>
            <Button color="success" className="next-button" onClick={handleSubmit} value="Next" >
                Submit More Feedback
            </Button>
        </>
    )
}

export default ThankYou;