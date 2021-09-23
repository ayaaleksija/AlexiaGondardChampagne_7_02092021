# GROUPOMANIA 
## Créer un réseau social d'entreprise
#### *Projet OpenClassroom n°7*
--------------

## 1. **MISSION & COMPETENCES**

* Personnaliser le contenu envoyé à un client web
* Authentifier un utilisateur et maintenir sa session
* Gérer un stockage de données à l'aide de SQL
* Implémenter un stockage de données sécurisé en utilisant SQL
--------

## 2. **INSTALLATION**

#### FRONTEND
---
* Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:
  
    ```
    npm install 
    ```

* puis lancer le projet en éxécutant la commande :
  
    ```
    npm run serve 
    ```

#### BACKEND
---
* Ouvrir le dossier Backend dans un second terminal de votre éditeur puis exécuter la commande:
  
    ```
    npm install 
    ```

* puis lancer le serveur en éxécutant la commande :
  
    ```
    node serve 
    ```
    ou 
    ```
    nodemon serve 
    ```
    ou
    ```
    npm start 
    ```

#### BACKEND
---
Utiliser un serveur de Base de Données type MAMP/XAMPP + Workbench pour visualiser et lier les modèles de tables

Créer les 3 bases de données nécessaires :
-> groupomania_test / groupomania_developement / groupomania_production

Utiliser Sequelize pour créer les tables directement via Node.JS:
-> sequelize db:create
-> sequelize db:migrate
