const router = require('express').Router();

const usersRouter = require('./users.js');
const voosRouter = require('./voos.js');

router.get('/', (request, response) => {
  return response.render('index', { title: 'Express' });
})

router.use('/users', usersRouter);
router.use('/voo', voosRouter);

module.exports = router;