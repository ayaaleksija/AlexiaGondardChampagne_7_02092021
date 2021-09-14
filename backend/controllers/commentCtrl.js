// -------- IMPORT DU MODELE -------- //
const models = require('../models/index');

// -------- CREATION D'UN COMMENTAIRE -------- //
exports.createComment = (req, res, next) => {
    // création du post
    models.Comment.create({
        UserId: res.locals.userId,
        postId: req.params.postId,
        content: req.body.content,
        attachment: 0,
    })
        .then(() => res.status(201).json({ message: "Commentaire posté" }))
        .catch((error) => res.status(400).json({ error }));
};


