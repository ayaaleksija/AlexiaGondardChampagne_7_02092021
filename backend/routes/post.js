// -------- Importation des packages -------- //
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/postCtrl');

router.post('/', auth, postCtrl.createPost);

module.exports = router;
