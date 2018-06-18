const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('Handling POST for /movie', req.body);
  const queryText = `INSERT INTO movie (actors, awards, boxoffice, country, dvd, director, genre, imdbRating, imdbVotes, internetmoviedatabase, metacritic, metascore, plot, poster, production, rated, released, rottentomatoes, runtime, title, type, website, writer)
                      Values
                      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23);`;
  pool.query(queryText, [req.body.actors, req.body.awards, req.body.boxoffice, req.body.country, req.body.dvd, req.body.director, req.body.genre, req.body.imdbrating, req.body.imdbvotes, req.body.internetmoviedatabase, req.body.metacritic,
 req.body.metascore, req.body.plot, req.body.poster, req.body.production, req.body.rated, req.body.released, req.body.rottentomatoes, req.body.runtime, req.body.title, req.body.type, req.body.website, req.body.writer])
    .then((result) => {
      console.log('Finished POST for /movie');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error handling POST for /movie', error);
      res.sendStatus(500);
    })
});

router.put('/', (req, res) => {
  console.log(req.query);
  const queryText = `UPDATE movie SET actors=$2, awards=$3, boxoffice=$4, country=$5, dvd=$6, director=$7, genre=$8, imdbrating=$9, imdbvotes=$10, internetmoviedatabase=$11, metacritic=$12, metascore=$13, plot=$14, poster=$15, production=$16, rated=$17, released=$18, rottentomatoes=$19, runtime=$20, title=$21, type=$22, website=$23, writer=$24 WHERE id=$1;`;
  pool.query(queryText, [req.query.id, req.query.actors, req.query.awards, req.query.boxoffice, req.query.country, req.query.dvd, req.query.director, req.query.genre, req.query.imdbrating, req.query.imdbvotes, req.query.internetmoviedatabase, req.query.metacritic, req.query.metascore, req.query.plot, req.query.poster, req.query.production, req.query.rated, req.query.released, req.query.rottentomatoes, req.query.runtime, req.query.title, req.query.type, req.query.website, req.query.writer])
  .then((result) => {
    console.log('Finished PUT for /movie');
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log(`Error handling POST for /movie`, error);
    res.sendStatus(500);
  })
});



router.get('/', (req, res) => {
  const possibleQuery = req.query.q;
  console.log('cheetah', parseString);
  let queryText2 = 'SELECT * FROM movie WHERE movie.genre.=$1;';
  let queryText = 'SELECT * FROM movie;';

  let func1 = function() {
    if (possibleQuery) {
      return pool.query(queryText2, [possibleQuery]);
    } else {
      return pool.query(queryText);
    }
  }
  func1()
  .then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('Error getting all treats', error);
    res.sendStatus(500);
  })

})


router.delete('/:id', (req, res) => {
  console.log('Handling delete request in /movie router');
  const id = req.params.id;
  console.log(req.params.id);
  const queryText = `DELETE FROM movie WHERE id=$1`;
  pool.query(queryText, [id])
  .then((result) => {
    console.log('Deleted from /movie')
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('Error handling DELETE for /movie', error);
    res.sendStatus(500);
  })
});

module.exports = router;
