# Création de L'API Restful

## Installation des bibliothèques fondamentales 
- express 
- dotenv
- cors 

## Configuration des cors 
- pour éviter des requêtes entrantes non voulues 

## Création des routes et des gestionnaires de route 

- callback/ fonction de rappel pour gérer les requêtes à destination de tel ou tel endpoint
- la fonction de rappel a toujours un paramètre req et un autre res

## Définition des variables d'environnement 

- Mettre dans un fichier .env les informations sensibles (ex: port d'écoute du serveur)

## Faire en sorte que votre application écoute un port 

- Les requêtes arrivant vers ce port seront "interceptées" par des middlewares de gestion des routes ciblées 


## Création d'un docker compose 

- L'idée est d'éviter de faire en sorte que votre machine soit un serveur de bdd postgre
- Vous allez donc conteneuriser deux services:
    - Le service/serveur de base de données 
    - Le service de visualisation de la bdd
``` bash
    docker compose up #fait monter le conteneur 
    docker compose down --volumes #supprime le conteneur et les volumes afférants
```


## Relier votre API à votre Serveur de BD conteneurisé 

- Utilisation d'un ORM ( Object relational mapper ) : Sequelize ou Prisma