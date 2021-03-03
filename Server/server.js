const { client, syncAndSeed } = require('./db/db');
const path = require('path');
const express = require('express');
const app = express();
const router = require('./api/routes');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/api', router);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
);

const setUp = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
    console.log(`connected to database`);
  } catch (ex) {
    console.log(ex);
  }
};

setUp();
