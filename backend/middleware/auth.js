const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // vérifie que le token est identique
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // on conserve le token donné
    const userId = decodedToken.userId;
    // si différent du sauvegardé, une erreur est envoyé
    if (req.body.userId && req.body.userId !== userId) {
      throw 'ID non valide';
    } else {
        // si identique on passe au middleware suivant (next)
      next();
    }
  } catch {
    console.log('erreur JWT');
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};