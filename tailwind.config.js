// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ajoutez ici les chemins vers vos fichiers HTML et JS
    './index.html',
    './src/js/*.js',
  ],
  theme: {
    extend: {
      // C'est ici que nous mettrons vos couleurs Blanc/Lavande
      colors: {
        // Définition de votre palette sobre
        'lavande-primaire': '#A989C8', // Couleur d'accentuation (Détails, liens)
        'gris-fonce-texte': '#333333', // Texte principal (meilleur contraste que le noir pur)
        'blanc-propre': '#FFFFFF',    // Fond principal
        'gris-clair-bordure': '#EAEAEA' // Lignes de séparation subtiles
      },
    },
  },
  plugins: [],
}