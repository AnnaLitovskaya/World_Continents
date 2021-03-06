const { client } = require('../db/db');
const router = require('express').Router();

router.get('/continents', async (req, res, next) => {
  try {
    const continents = await client.query('SELECT * FROM continent;');
    res.send(continents.rows);
  } catch (ex) {
    next(ex);
  }
});

router.get('/continents/fact/:id', async (req, res, next) => {
  try {
    const fact = await client.query(
      `
    SELECT data.fact AS "fact", continent.name AS "continent" FROM continent
    JOIN data ON data.continent_id = continent.id
    WHERE continent.id = $1
  `,
      [req.params.id]
    );
    res.send(fact.rows);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
