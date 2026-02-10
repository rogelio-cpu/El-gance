# Élégance & Éclat - Site E-Commerce

Bienvenue sur le projet **Élégance & Éclat**, un site e-commerce de bijoux pour femmes moderne et raffiné.

## 🚀 Fonctionnalités

- **Catalogue de Produits** : Présentation élégante de bijoux (colliers, bagues, bracelets, boucles d'oreilles).
- **Panier Fonctionnel** : Ajout, suppression et calcul en temps réel du total en **Francs Congolais (FC)**.
- **Persistance des Données** : Utilisation du `localStorage` pour conserver le panier même après le rafraîchissement de la page.
- **Multi-pages** : Support pour les pages Accueil, À Propos, Contact, Livraison et Conditions de Vente.
- **Paiement Simulé** : Formulaire de paiement interactif avec modal et simulation de validation de transaction.

## 🎨 Design

- **Palette** : Bleu Profond, Rose Accent, Rouge et Blanc.
- **Responsive** : Adapté aux mobiles, tablettes et ordinateurs.
- **Effets** : Hover effects, sidebar animée, et modal de checkout fluide.

## 🛠️ Stack Technique

- **HTML5** : Structure sémantique.
- **CSS3** : Flexbox, CSS Grid, Variables et Animations.
- **JavaScript (Vanilla)** : Logique métier et manipulation du DOM (pas de framework externe).

## 📂 Structure du Projet

```text
/marj
├── img/                # Dossier des images (bijoux, favicon)
├── index.html          # Page d'accueil
├── about.html          # Page À propos
├── contact.html        # Page de contact
├── delivery.html       # Page d'informations de livraison
├── terms.html          # Conditions générales de vente
├── style.css           # Styles globaux
├── app.js              # Logique JavaScript
└── README.md           # Documentation du projet
```

## � Installation & Déploiement

### Localement
1. Clonez ou téléchargez ce dossier.
2. Ouvrez `index.html` dans n'importe quel navigateur moderne.

### Sur Render (Site Statique)
1. **Poussez votre code** sur un dépôt GitHub, GitLab ou Bitbucket.
2. **Connectez-vous à [Render](https://render.com/)**.
3. Cliquez sur **New +** et choisissez **Static Site**.
4. **Connectez votre dépôt** GitHub.
5. **Configuration** :
   - **Name** : `elegance-eclat` (ou le nom de votre choix).
   - **Build Command** : Laissez vide (ou `npm install` si vous ajoutez des outils de build plus tard).
   - **Publish Directory** : `./` (la racine).
6. Cliquez sur **Create Static Site**. Votre site sera en ligne en quelques secondes !

---
*Projet réalisé avec passion pour l'élégance.*
