import {HashRouter as Router, Route, Link} from 'react-router-dom';

function PageFour(){
    
    return(
        <>
            <h1>Page Four</h1>
            <Router>
                <Link to="/pageFive">Next</Link>
                
            </Router>
        </>
    )
}

export default PageFour;