import {HashRouter as Router, Route, Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function PageTwo(){
    const [understandingRating, setUnderstandingRating] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'understanding', payload: understandingRating})
    }

    return (
        <>
            <h1>Page Two</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setUnderstandingRating(event.target.value)}
                    placeholder="Rate"
                    value={understandingRating} 
                    type="number"
                />

                <input type="submit" value="Submit" />
            </form>
            <Router>
                <Link to="/pageThree">Next</Link>
            </Router>
        </>
    )
}

export default PageTwo;