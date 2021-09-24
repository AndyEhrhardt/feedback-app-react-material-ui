import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function PageOne(){
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'feeling', payload: feelingRating, key: 'feeling'})
        history.push('/pageTwo');
    }

    return(
        <>
            <h1>Page One</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setFeelingRating(event.target.value)}
                    placeholder="Rate"
                    value={feelingRating} 
                    type="number"
                />
                <input type="submit" value="Next" />
            </form>
            
        </>
    )
}

export default PageOne;