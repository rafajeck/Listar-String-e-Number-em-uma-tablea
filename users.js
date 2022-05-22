var router = require('express').Router();

/* GET users listing. */
router.get('/', function(request, response) {
  return response.json({ message: 'Bem Vindo Ao Sistema de Voos, users' });
});

module.exports = router;
