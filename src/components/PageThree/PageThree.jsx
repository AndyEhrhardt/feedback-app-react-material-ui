import {HashRouter as Router, Route, Link} from 'react-router-dom';

function PageThree(){
    return(
        <>
            <h1>Page Three</h1>
            <Router>
                <Link to="/pageFour">Next</Link>
            </Router>
        </>
    )
}

export default PageThree; 