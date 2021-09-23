const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    console.log('Getting responses');
    
    const queryText = 'SELECT * FROM "feedback" ORDER BY "id";';
    pool.query(queryText)
    .then((result) => {
        console.log('Got this back from the database', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        alert('error in GET');
        res.sendStatus(500);
    });
});

module.exports = router;