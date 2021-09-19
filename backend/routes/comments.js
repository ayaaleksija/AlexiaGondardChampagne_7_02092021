// -------- Importation des packages -------- //
const express = require('express');
const router = express.Router({
    mergeParams: true
});
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/commentCtrl');

router.post('/', auth, commentCtrl.createComment);
router.get('/', auth, commentCtrl.getAllComments);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;