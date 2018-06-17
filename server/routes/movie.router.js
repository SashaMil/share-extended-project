const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('Handling POST for /movie', req.body);
  const queryText = `INSERT INTO movie (actors, awards, boxoffice, country, dvd, director, genre, metascore, plot, poster, production, rated, ratings, released, runtime, title, type, website, writer, year, imdbRating, imdbVotes)
                      Values
                      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22);`;
  pool.query(queryText, [req.body.Actors, req.body.Awards, req.body.BoxOffice, req.body.Country, req.body.DVD, req.body.Director, req.body.Genre,
 req.body.Metascore, req.body.Plot, req.body.Poster, req.body.Production, req.body.Rated, req.body.Ratings, req.body.Released, req.body.Runtime, req.body.Title, req.body.Type, req.body.Website, req.body.Writer,
  req.body.Year, req.body.imdbRating, req.body.imdbVotes])
    .then((result) => {
      console.log('Finished POST for /movie');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error handling POST for /movie', error);
      res.sendStatus(500);
    })
});

// router.get('/:type', (req, res) => {
//   console.log('gorrilla');
//   console.log('Handling get request in /listing router');
//   const type = req.params.type;
//   console.log(req);
//   console.log(req.params.type);
//   const queryText = 'SELECT * FROM listings WHERE type = $1;';
//   pool.query(queryText, [type])
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log('Error getting all type listings', err)
//       res.sendStatus(500);
//     })
// });
//
// router.delete('/:id', (req, res) => {
//   console.log('Handling delete request in /listing router');
//   const id = req.params.id;
//   console.log(req.params.id);
//   const queryText = `DELETE FROM listings WHERE id=$1`;
//   pool.query(queryText, [id])
//   .then((result) => {
//     console.log('Deleted from /listings')
//     res.sendStatus(200);
//   })
//   .catch((error) => {
//     console.log('Error handling DELETE for /listing', error);
//     res.sendStatus(500);
//   })
// });

module.exports = router;
