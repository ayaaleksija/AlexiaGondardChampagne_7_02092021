// -------- Importation des packages -------- //
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:id', auth, userCtrl.getOneUser);
router.put('/:id', auth, userCtrl.updateUser);


module.exports = router;