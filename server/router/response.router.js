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

router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding new feedback:`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
        VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments, newFeedback.flagged])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
      });
  });


module.exports = router;