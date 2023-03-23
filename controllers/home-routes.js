const router = require('express').Router();
const { User, Questions } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    console.log(await req.session.loggedIn)
    res.render('home', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Takequiz', withAuth, async (req, res) => {
  console.log('test');
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['name', 'ASC']],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));
    console.log(await req.session.loggedIn)
    res.render('Takequiz', {
      // users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log('LOGIN');
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/quizpage', withAuth, async (req, res) => {
  console.log('below/quiz')
  try {
    const quizData = await Questions.findAll({
      attibutes: ['id', 'question', 'answers', 'correctAnswer']
    });
    // const users = userData.map((project) => project.get({ plain: true }));
    const quizQuestions = quizData.map((project) => project.get({ plain: true }));
    console.log(quizData);
    res.render('quizpage', {
      quizQuestions,
      loggedIn: req.session.loggedIn,
    });
    if (!quizData) {
      res.status(400).json({ message: 'quiz not found' });
    }
  } catch (err) {
    console.log('here error')
    res.status(500).json(err);
  }
});

module.exports = router;
