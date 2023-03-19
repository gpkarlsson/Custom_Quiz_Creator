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
  console.log('test')
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

router.get('/quiz', withAuth, async (req, res) => {
  console.log('below/quiz')
  try {
    const quizData = await Questions.findOne();
    if (!quizData) {
      res.status(400).json({ message: 'quiz not found' });
    }
    const quiz = quizData.dataValues.questions
    console.log(quizData)

    res.render('quiz', {
      quiz,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
      console.log('here error')
      res.status(500).json(err);
  }
});

module.exports = router;
