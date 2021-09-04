const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Mini message board'});
});

router.post('/new', (req, res, next) => {
  const { user, text } = req.body;
  (user && text) && messages.push({ text, user, added: new Date() });
  res.redirect('/');
})

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini message board', messages: messages });
});

module.exports = router;
