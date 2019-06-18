# Taste Healthy - Cahier technique

Taste Healthy est un projet de data journalisme basé sur l'alimentation et la consommation journalière des Français. Grâce à des données ouvertes, nous sômmes en mesure de d'analyser la consommation de n'importe quel individu et de vulgariser sur la quantité de sucre qu'il mange au quotidien, les additifs qui peuvent impacter sa santé ou encore démentir les différents mythes auxquels il peut être amené à croire (bio = sain, par exemple). Notre visualisation de données a une visée pédagogique et a pour but de sensibiliser le public sur ce qu'il consomme réellement au quotidien.

## Sommaire

- [Introduction](#Introduction)
    - [Objectifs](#Objectifs)
    - [Périmètre](#Périmètre)
    - [Définition, acronymes, glossaire](#Définition-acronymes-glossaire)
    - [Vue d'ensemble](#Vue-d%E2%80%99ensemble)
- [Description d'ensemble](#Description-d%E2%80%99ensemble)
    - [Sélection des produits](#Sélection-des-produits)
    - [Visualisation](#Visualisation)
    - [Choix techniques](#Choix-techniques)
        - [Base de données](#Base-de-données)
        - [Solution back-end](#Solution-back-end)
        - [Solution front-end](#Solution-front-end)
    - [Dépendances](#Dépendances)
- [Base de données](#Base-de-données)
    - [Définition des entités](#Définition-des-entités)
    - [Modélisation](#Modélisation)
    - [Projection de volumétrie](#Projection-de-volumétrie)
- [Sécurité](#Sécurité)
    - [Etude des risques](#Etude-des-risques)
- [Installation et déploiement](#Installation-et-déploiement)
    - [Installation](#Installation)
    - [Déploiement](#Déploiement)

# Introduction

 Taste Healthy est un projet de data journalisme destiné à analyser l’alimentation et la consommation journalière d'un individu. Grâce à des données ouvertes, nous sômmes en mesure de d’analyser la consommation de n’importe quel individu et de vulgariser sur ce que représente son alimentation, en visualisant la quantité de sucre ajoutés, les additifs ou encore la répartition des emballages.

**Open Food Facts** est un initiative collective proposant, grâce aux nombreuses collaborations des internautes, une très grande base de données collaborative, libre et ouverte sur des produits alimentaires du monde entier.

## Objectifs

L'objectif est donc d'effectuer de la visualisation de données d'après des données fournies par l'utilisateur en se basant sur la base de données d'Open Food Facts.

Nos objectifs UX sont donc constitués des points suivants : 

- Vulgariser et parler avec les chiffres
- Proposer de la visualisation intéractive
- Une navigation et une présentation claire du contenu proposé

## Périmètre

L'utilisateur se connecte sur le site, rempli les informations demandés (activité sportive et sexe), ajoute ses produits, puis consulte la visualisation de données propre à ce qu'il a renseigné comme produit au préalable.

## Définition, acronymes, glossaire

**Categories** : Les catégories de produits. Chaque produit possède une catégorie.

**Produits** : Produits saisis par l'utilisateur ou ceux présents dans le jeu de données.

## Vue d'ensemble

L'application front-end permet de consulter le contenu et de manipuler les données grâce à la visualisation. Le back-end de cette application web permet donc de récupérer les données des graphiques et de rechercher des produits.

Un script de populate permet de formater le jeu de données et de remplir la base de données.

# Description d'ensemble

## Sélection des produits

Après avoir entré ses caractéristiques physiques, l'utilisateur est invité à remplir une liste de produits réparti parmis les moment de la journée : *Petit déjeuner, Déjeuner, Goûter et Dîner*. L'utilisateur n'est pas obligé de tout remplir. Aussitôt un repas renseigné, l'internaute peut cliquer sur "visualiser" pour générer une visualisation de données.

## Visualisation

Une fois la visualisation de données générée, nous avons un aperçu des informations nutritionnelles des produits sélectionnés, accompagné d'un indicateur représentant la consommation recommandée.

<p align="center">
    <img src="https://i.imgur.com/Y9dASxB.png" alt="">
</p>

Nous avons un aperçu de l'origine des produits et des emballages utilisés.

<p align="center">
    <img src="https://i.imgur.com/Tsr4Gib.png" alt="">
</p>

L'application propose également des produits de substitution pour réguler la consommation journalière.

<p align="center">
    <img src="https://i.imgur.com/ID6i8tn.png" alt="">
</p>

Le résultat est simple : une jauge supplémentaire permettant de comparer les changements entre l'ancienne et la nouvelle sélection.

<p align="center">
    <img src="https://i.imgur.com/s2Iy7PH.png" alt="">
</p>

## Choix techniques

### Base de donnée(s)

La solution de base de donnée est une base de donnée PostgreSQL 11.0.

### Solution back-end

Nous utiliserons un serveur nodejs avec le framework Express en version 4.0.

### Solution front-end

Une application React avec un store global gérée avec Redux.

## Dépendances

- React : Redux
- Node : Express, Sequelize
- Postgres 11
- Travis (CI) : Jest, eslint, commitlint
- Docker (CD)
- Docs API : apidocjs

# Base de données

### Définition des entités

#### Table Products

- id
- product_name
- generic_name
- quantity
- quantity_unity
- image_url
- origins
- packaging
- manufacturing_places
- countries
- labels
- purchase_places
- stores
- nutrition_facts
- misc_data
- createdAt
- updatedAt
- categoryId

#### Table Categories

- id
- name
- createdAt
- updatedAt

### Modélisation

#### Categories

<p align="center">
    <img src="https://i.imgur.com/zVHRpzd.png" alt="">
</p>

#### Products

<p align="center">
    <img src="https://i.imgur.com/OexCM8y.png" alt="">
</p>

### Projection de volumétrie

##### Containers

```
NAMES                    SIZE
-----------------------  ------------------------
database                 63B (virtual 312MB)
api                      0B (virtual 1.34GB)
```

##### Poid des données

La base de données comporte environ 6000 à 8000 produits et 190 catégories. Une base de cette taille représente environ 20 à 25 MB.

```
     Name     |  Owner   | Encoding |  Collate   |   Ctype    |  Size   |
--------------+----------+----------+------------+------------+---------+
 tastehealthy | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 19 MB   |
```

# Sécurité

### Etude des risques

L'API ne permettra aucune opération d'écriture ou d'authentification, les risques de sécurité sont donc limités et mineurs. En revenche nous devons être vigilant quant à aux performances qui pourra être sérieusement impactée étant donné le nombre conséquent de données et le nombre de requête que le client devra effectuer.

Mesures de sécurité : 

- CORS
- Protection anti-XSS
- DoS / DDoS
- En-têtes de sécurité ; avec [Helmet](https://helmetjs.github.io/)

# Installation et déploiement

### Requis

- npm >= 6.x
- node >= 8.x

~~~bash
$ git clone git@github.com:sundowndev/TasteHealthy.git
$ cd TasteHealthy/
~~~

## Usage (Docker)

Lancer les services

~~~bash
$ docker-compose up -d
~~~

## Usage

Start the client (port 8000)

~~~bash
$ npm run client:build
$ npm run client:start
~~~

Start the server (port 3000)

~~~bash
$ npm run server:build && node server/build/server.js
~~~

Nous utilisons Docker pour le déploiement. Le projet nécessite qu'on télécharge puis build les images en amont avec les commandes `docker-compose pull` et `docker-compose build` (cela se fait déjà automatiquement avec `docker-compose up -d`).
