

const router = require('express').Router();

var voosController = require('../controllers/voosController');

router.post('/create', voosController.create);

router.get('/getAll', voosController.getAll);

router.delete('/delete/:id', voosController.delete);


module.exports = router;