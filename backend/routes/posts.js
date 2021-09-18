// -------- Importation des packages -------- //
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/postCtrl');

router.post('/', auth, postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPost);
router.delete('/:id', auth, postCtrl.deletePost);


module.exports = router;