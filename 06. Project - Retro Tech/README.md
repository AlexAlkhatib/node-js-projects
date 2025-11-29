# 🕹️ RetroTech — Mini-boutique vintage inspirée des technologies rétro — Projet Fullstack

RetroTech est une application web full-stack simple et élégante rendant hommage aux technologies vintage.
Elle simule une petite boutique en ligne proposant des consoles rétro, accessoires anciens et objets tech emblématiques.

Le projet inclut un **serveur Node.js sans framework**, un frontend statique moderne et un mini-système d’abonnement via requête POST.


## ✨ Fonctionnalités

* 🕹️ **Catalogue de produits rétro**
  Affichage de plusieurs articles mythiques (GameBoy, disquettes, ZX Spectrum…).

* 📖 **Page “About” immersive**
  Présentation de la philosophie RetroTech et de la passion pour la préservation des technologies vintage.

* ✉️ **Page d’inscription à la newsletter**
  Formulaire d’email avec envoi d’une requête POST vers `/sub`.

* 🧭 **Navigation claire et responsive**
  Pages : Home • About • Subscribe

* 📦 **Serveur Node.js custom**
  Gestion manuelle des routes, des assets et des types MIME.


## 📂 Structure du Projet

```
RetroTech/
│
├── public/
│   ├── index.html
│   ├── about.html
│   ├── subscribe.html
│   ├── index.css
│   ├── index.js
│   └── images/
│
├── utils/
│   └── getContentType.js
│
├── server.js
├── package.json
└── README.md
```


## ⚙️ Installation & Lancement

```bash
git clone https://github.com/<username>/retrotech.git
cd retrotech
npm install
npm start
```

Puis rendez-vous sur :
👉 [http://localhost:8000](http://localhost:8000)


## 🛠️ Stack Technique

**Frontend :**

* HTML5
* CSS3 (Google Fonts, styles rétro)
* JavaScript ES Modules
* Design minimaliste rétro-gaming

**Backend :**

* Node.js (module `http`)
* Routing manuel
* Gestion des ressources statiques
* Endpoint POST `/sub` pour récupérer un email


## 🔌 Endpoints API

### `POST /sub`

Reçoit l’adresse email saisie dans le formulaire d’abonnement.

Payload attendu :

```json
{
  "email": "retro@oldskool.com"
}
```

Réponse :

```json
{
  "email": "retro@oldskool.com"
}
```


## 🎯 Objectifs pédagogiques

Ce projet m’a permis de :

* Construire un serveur Node.js sans Express
* Manipuler le DOM et gérer les événements côté client
* Implémenter une requête POST avec `fetch()`
* Organiser un site multi-pages avec assets statiques
* Utiliser Google Fonts pour un rendu typographique cohérent
* Créer une expérience utilisateur dans un thème rétro moderne


## 👤 Auteur

**Alex Alkhatib**
Fullstack Software Engineer
GitHub : [https://github.com/AlexAlkhatib](https://github.com/AlexAlkhatib)


## 📄 Licence

MIT License — Copyright © 2025
