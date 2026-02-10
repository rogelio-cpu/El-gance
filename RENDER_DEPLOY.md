# Guide de Déploiement sur Render

Pour mettre votre boutique **Élégance & Éclat** en ligne gratuitement, suivez ces étapes :

## 1. Préparer votre code sur GitHub
Render a besoin d'accéder à votre code via un dépôt Git.
1. Créez un compte sur [GitHub](https://github.com/).
2. Créez un nouveau dépôt (ex: `bijouterie-marj`).
3. Poussez vos fichiers locaux vers ce dépôt :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement"
   git remote add origin https://github.com/VOTRE_NOM/VOTRE_DEPOT.git
   git push -u origin main
   ```

## 2. Configurer Render
1. Allez sur **[dashboard.render.com](https://dashboard.render.com/)**.
2. Cliquez sur **"New"** (bouton bleu en haut à droite) puis sur **"Static Site"**.
3. Connectez votre compte GitHub et sélectionnez votre dépôt `bijouterie-marj`.

## 3. Paramètres de déploiement
Dans l'écran de configuration, remplissez les champs comme suit :
- **Name** : `bijouterie-elegance`
- **Region** : Choisissez la plus proche de vous (ex: Frankfurt).
- **Branch** : `main`
- **Build Command** : *(Laissez vide car c'est du HTML pur)*.
- **Publish Directory** : `./`

## 4. Lancer le déploiement
Cliquez sur le bouton **"Create Static Site"**.
- Render va récupérer votre code et générer une URL (ex: `bijouterie-elegance.onrender.com`).
- Une fois le message **"Your site is live"** affiché, cliquez sur l'URL pour voir votre boutique en ligne !

> [!TIP]
> Chaque fois que vous ferez un `git push`, Render mettra automatiquement votre site à jour !
