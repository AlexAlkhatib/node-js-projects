# 🕯️ From The Other Side

**Plateforme interactive de signalements paranormaux**

*From The Other Side* est une application full-stack construite avec **Node.js**, **HTML/CSS/JS** et un serveur HTTP fait maison.
Elle permet aux utilisateurs de **consulter**, **publier** et **suivre en direct** des signalements d’activités paranormales, le tout dans un univers immersif.

Ce projet illustre la création d’un backend minimaliste en Node.js (sans framework), la gestion des routes API, la validation des données et le rendu d’une application frontend complète.


## ✨ Fonctionnalités principales

* 👻 **Consultation de témoignages paranormaux**
  Affichage dynamique des signalements publiés.

* 📝 **Publication d’un nouveau sighting**
  Formulaire avec validation et nettoyage des données via `sanitize-html`.

* 📰 **Flux d’actualités en direct (Live News)**
  Récupération d’événements simulés grâce à une API dédiée (`/api/news`).

* 🌐 **Navigation complète entre Home / Sightings / Upload / News**

* 🔒 **Sécurisation des entrées** (XSS, HTML injection)

* 📁 **Serveur de fichiers statiques fait maison**
  Gestion personnalisée des assets via `serveStatic`.


## 📂 Structure du projet

```
from-the-other-side/
│
├── public/
│   ├── index.html
│   ├── sightings.html
│   ├── upload-sighting.html
│   ├── news.html
│   ├── index.css
│   ├── index.js
│   ├── upload-sighting.js
│   ├── news.js
│   └── images/
│
├── handlers/
│   └── routeHandlers.js
│
├── utils/
│   ├── serveStatic.js
│   └── (autres utilitaires)
│
├── server.js
├── package.json
└── README.md
```


## ⚙️ Installation & Lancement

```bash
git clone https://github.com/<username>/from-the-other-side.git
cd from-the-other-side
npm install
npm start
```

Accès à l’application :
👉 [http://localhost:8000](http://localhost:8000)


## 🛠️ Stack Technique

**Frontend**

* HTML5
* CSS3 (typographies personnalisées, mise en page responsive)
* JavaScript (modules ES, DOM, fetch API)

**Backend**

* Node.js (module `http`)
* Routing minimaliste
* API GET/POST
* Validation + sanitation (`sanitize-html`)


## 🧪 API

### `GET /api`

Récupère la liste des sightings enregistrés.

### `POST /api`

Enregistre un nouveau sighting transmis depuis le formulaire Upload.

Payload attendu :

```json
{
  "title": "Haunted Corridor",
  "details": "Strange whispering at night...",
  "datetime": "2025-01-22T23:00",
  "location": "London, UK"
}
```

### `GET /api/news`

Retourne un flux d’actualités paranormales (fake data).


## 🎯 Objectifs pédagogiques

Ce projet m’a permis de :

* Construire un serveur Node.js sans Express
* Gérer un mini-router API (GET/POST + endpoints custom)
* Servir des fichiers statiques et assets manuellement
* Implémenter un frontend modulaire avec plusieurs pages
* Manipuler le DOM de manière dynamique
* Nettoyer les données côté backend pour éviter les injections
* Concevoir une structure de projet claire et maintenable


## 👤 Auteur

**Alex Alkhatib**
GitHub : [https://github.com/AlexAlkhatib](https://github.com/AlexAlkhatib)
