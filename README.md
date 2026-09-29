# TrioMégia — site statique GitHub Pages

Ce dossier est **directement prêt pour GitHub Pages**.

## Important
`index.html` est à la racine du dépôt. Il ne faut pas envoyer le dossier parent autour du site.

### Déploiement
1. Crée un dépôt GitHub.
2. Envoie **tout le contenu de ce dossier** : `index.html`, `style.css`, `script.js` et `assets/`.
3. Dans GitHub : **Settings → Pages**.
4. Source : **Deploy from a branch**.
5. Sélectionne `main` et `/ (root)`.
6. Enregistre puis ouvre l'URL Pages indiquée par GitHub.

La newsletter n'est pas disponible pour l'instant et affiche le message : « Nous sommes désolés mais cette fonctionnalité n'est pas disponible pour l'instant. A.A.N ».


## Équipe

TrioMégia est présenté comme une entreprise bretonne développée par trois amis :
- **Aedan** — programmation
- **Antoine** — idées & concepts
- **Nahël** — jeux & gaming


## Histoire du projet

TrioMégia est un projet initié en **2022**. En raison du manque de temps et de raisons personnelles, son développement complet est envisagé progressivement sur une période d'au moins **10 à 20 ans**. Cette durée correspond à une vision de long terme et peut évoluer selon les disponibilités et les priorités des créateurs.

### Slogan

**DEMAIN C'EST MAINTENANT**


## Panneau d'administration

Le projet inclut désormais `admin.html`, une interface d'administration statique accessible depuis le footer du site.

Elle permet notamment de consulter l'état du projet et de conserver des notes localement dans le navigateur. **Elle n'est pas un système d'administration sécurisé** : GitHub Pages étant statique, un vrai compte administrateur, une authentification et une base de données nécessitent un backend ou un service externe.


## Accès administrateur

Le panneau `admin.html` possède maintenant une connexion côté navigateur.

**Mot de passe initial : `TrioAdmin!2026`**

Le code ne contient pas le mot de passe en clair : il contient uniquement son empreinte SHA-256. Une session est conservée dans `sessionStorage`.

⚠️ **Important :** sur GitHub Pages, ce système ne constitue pas une sécurité forte. Comme tout le code JavaScript est public, un utilisateur techniquement avancé peut récupérer l'empreinte et tenter de retrouver le mot de passe. Pour protéger réellement un panneau d'administration, il faut une authentification côté serveur/backend.
