import express from 'express';

import cors from 'cors';
import pageRout from './Router/router.js';

// app config
const app = express();
const port = process.env.PORT || 8000;

// midlwares

app.use(express.json());
app.use(cors());
//routmidlware
app.use('/users', pageRout);

// Api
app.get('/data', async (req, res) => {
  try {
    res.status(200).send('Get Request is on');
  } catch (e) {
    res.status(500).send(e);
  }
});
// Listner
app.listen(port, () => console.log(`Application is Running on PORT ${port}`));
