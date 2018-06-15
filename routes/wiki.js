const router = require('express').Router();
const { addPage } = require('../views');
module.exports = router;

router.get('/', (req, res, next) => {
  res.redirect('../');
});

router.post('/', (req, res, next) => {
  res.json(req.body);
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});
