// -------- Importation des packages -------- //
// import du framework express
const express = require('express');
//import de bodyParser 
const bodyParser = require('body-parser');

const cors = require('cors');
// utilisation de path pour accéder au chemins des fichiers
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// -------- Importation des routes -------- //
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");


// -------- utilisation des imports -------- //
// mise en place du framework express
const app = express();


// paramétrage des entetes des requetes globales
app.use((req, res, next) => {
    // autorisaion d'accès : tout le monde
    res.setHeader('Access-Control-Allow-Origin', '*');
    // autorisation d'utilisation des entetes définies
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // autorisation pour utiliser les méthodes définies
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    //on passe au middleware suivant
    next();
});


// mise en place de bodyParser 
// permet de recuperer les arguments et paramètres dans les header de requetes
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

// sécurisation des entetes requetes
app.use(helmet());

// limitatation des demandes répétées aux API
app.use(rateLimit());

app.use('/image', express.static(path.join(__dirname, 'image')));

// utilisation des routes crées après import
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/posts/:postId/comments', commentRoutes);



module.exports = app;