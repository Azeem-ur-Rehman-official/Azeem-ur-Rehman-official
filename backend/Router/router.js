import express from 'express';
const router = express.Router();
import data from '../data/data.js';
// to access data of leaderboard table
router.get('/leaderboard', async (req, res) => {
  const allData = await data;
  try {
    res.status(200).send(allData);
  } catch (e) {
    res.status(500).send(e);
  }
});
router.get('/prectice', async (req, res) => {
  const allData = await data;
  try {
    localStorage.setItem('registerUsername', JSON.stringify(email));
    localStorage.setItem('registerPassword', JSON.stringify(password));
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/signup', async (req, res) => {
  const myData = req.body;
});
router.post('/login', async (req, res) => {
  try {
    const myData = req.body;

    res.status(201).send('Login Successfully');
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;
