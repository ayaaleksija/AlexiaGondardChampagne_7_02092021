// -------- Importation des packages -------- //
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')
const postCtrl = require('../controllers/postCtrl');

router.post('/', auth, multer, postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.delete('/:id', auth, postCtrl.deletePost);


module.exports = router;