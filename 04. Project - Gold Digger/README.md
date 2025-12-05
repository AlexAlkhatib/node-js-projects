# 💰 GoldDigger — Suivi du prix de l’or & investissement virtuel

**GoldDigger** est une application **Node.js full-stack** permettant de suivre en temps réel l’évolution (simulée) du prix de l’or et d’investir virtuellement dans de l’or numérique.
L’application génère automatiquement un **reçu PDF téléchargeable** pour chaque investissement grâce à **PDFKit**, et utilise **Server-Sent Events (SSE)** pour actualiser les prix en direct.


## 🚀 Fonctionnalités

* 📈 **Suivi en temps réel** du prix de l’or (prix simulé)
* 🪙 **Système d’investissement virtuel**
* 📄 **Génération automatique de reçus PDF**
* 🧾 **Téléchargement d’un résumé d’investissement**
* 🧠 Architecture modulaire propre (utils, routing basique)
* ❌ Page d’erreur personnalisée (404)


## 📂 Structure du Projet

```
GoldDigger/
│
├── public/
│   ├── 404.html
│   ├── index.css
│   ├── index.html
│   └── index.js
│
├── utils/
│   ├── generatePdf.js
│   ├── getContentType.js
│   ├── getGoldPrice.js
│   ├── sendResponse.js
│   └── serveStatic.js
│
├── package.json
├── package-lock.json
└── server.js
```


## ⚙️ Installation

```bash
git clone https://github.com/username/golddigger.git
cd golddigger
npm install
npm start
```

Accéder ensuite à :

👉 [http://localhost:8000](http://localhost:8000)


## 🛠️ Stack Technique

* **Backend :** Node.js (module `http`)
* **Frontend :** HTML / CSS / JavaScript
* **Génération PDF :** PDFKit
* **Mises à jour en temps réel :** Server-Sent Events (SSE)


## 📡 API

### `GET /api/price`

Renvoie le prix de l’or en direct via **SSE**, mis à jour toutes les 2 secondes.

### `POST /api/invest`

Reçoit les données d’investissement, génère un **reçu PDF** et renvoie le fichier au client.

#### Exemple de payload :

```json
{
  "goldPrice": 10000.00,
  "amount": 5000,
  "grams": 0.5
}
```


## 👤 Auteur

**Alex Alkhatib**
Full-Stack Software Engineer
[GitHub – AlexAlkhatib](https://github.com/AlexAlkhatib)


## 📄 Licence

MIT License — Copyright © 2025


## 📝 Notes

* Cette application est un **prototype démo**, sans transactions réelles.
* Les prix affichés sont **aléatoires** et ne proviennent pas de marchés financiers.
