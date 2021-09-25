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

router.post('/', (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding new feedback:`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "one")
        VALUES ($1, $2, $3, $4, $5);`
  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments, newFeedback.one])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

router.put('/:id', (req,res) => {
  console.log(req.params.id);
  console.log(req.body.flagged)
  const queryText = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;';
  pool.query(queryText, [req.body.flagged, req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error in /responses PUT', error);
      res.sendStatus(500);
  })
});

router.delete('/:id', (req,res) => {
  console.log(req.params.id);
  const queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
  pool.query(queryText, [req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error in /responses DELETE', error);
      res.sendStatus(500);
  })
});

module.exports = router;