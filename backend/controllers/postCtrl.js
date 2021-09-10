const models = require('../models/index');


exports.createPost = (req, res, next) => {
    console.log(res.locals.userId);
    // création du post
    models.Post.create({
        UserId: res.locals.userId,
        content: req.body.content,
        attachment: "",
    })
    .then(() => res.status(201).json({ message: "Post créé" }))
    .catch((error) => res.status(400).json({ error }));
};


