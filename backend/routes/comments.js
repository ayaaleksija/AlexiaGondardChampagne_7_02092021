// -------- Importation des packages -------- //
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/commentCtrl');

router.post('/', auth, commentCtrl.createComment);
router.get('/', auth, commentCtrl.getAllComment);
router.delete('/:id', auth, postCtrl.deleteComment);

module.exports = router;