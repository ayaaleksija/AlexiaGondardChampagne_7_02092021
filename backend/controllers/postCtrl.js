const models = require('../models/index');


exports.createPost = (req, res, next) => {
    console.log(res.locals.userId);
    // création du post
    models.Post.create({
        UserId: res.locals.userId,
        content: req.body.content,
        attachment: req.body.attachment,
    })
        .then(() => res.status(201).json({ message: "Post créé" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.getAllPost = (req, res, next) => {
    const order = req.query.order;
    models.Post.findAll({
        order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
        include: [
            {
                model: models.User,
                attributes: ["username"],
            },
        ],
    })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    models.Post.destroy({
        where: {
            id: req.params.id,
        }
    })
        .then(() => res.status(200).json({ message: "Post supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};
