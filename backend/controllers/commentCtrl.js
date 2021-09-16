// -------- IMPORT DU MODELE -------- //
const models = require('../models/index');

// -------- CREATION D'UN COMMENTAIRE -------- //
exports.createComment = (req, res, next) => {
    // création d'un commentaire
    models.Comment.create({
            UserId: res.locals.userId,
            postId: req.params.postId,
            content: req.body.content,
        })
        .then(() => res.status(201).json({
            message: "Commentaire posté"
        }))
        .catch((error) => res.status(400).json({
            error
        }));
};

exports.deleteComment = (req, res, next) => {
    models.Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({
            message: "Commentaire supprimé !"
        }))
        .catch((error) => res.status(400).json({
            error
        }));
}

exports.getAllComments = (req, res, next) => {
    let order = req.query.order;
    models.Comment.findAll({
            order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
            include: [{
                    model: models.User,
                    attributes: ["username"],
                },

            ],
            where: {
                postId: req.params.postId
            }
        }).then(result => {
            res.status(200).json(result);
        })
        .catch((error) => res.status(400).json({
            error
        }));
}