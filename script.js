
// Sélectionne tous les liens qui commencent par #
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le saut brutal

    // Récupère l'élément cible
    const target = document.querySelector(this.getAttribute('href'));

    // Si la section existe, on fait défiler doucement
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // Défilement fluide
        block: 'start'      // Aligne en haut de la page
      });
    }
  });
});


// Fonction pour afficher le popup
function afficherPopupBienvenue() {
  document.getElementById("popup-bienvenue").style.display = "block";
}

// Fonction pour fermer le popup
function fermerPopup() {
  document.getElementById("popup-bienvenue").style.display = "none";
}

// Affiche le popup après 1 seconde
window.addEventListener("DOMContentLoaded", function() {
  setTimeout(afficherPopupBienvenue, 1000);
});


// Sélectionne tous les champs du formulaire
const inputs = document.querySelectorAll('.form-control');

// Ajoute un effet au focus
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.borderColor = '#c62828'; // Rouge vif
    input.style.boxShadow = '0 0 8px rgba(198, 40, 40, 0.4)';
  });

  input.addEventListener('blur', () => {
    input.style.borderColor = '#ccc'; // Retour à la couleur normale
    input.style.boxShadow = 'none';
  });
});

// Gestion de l'envoi du formulaire
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi classique

  // Récupère les données
  const nom = document.getElementById('name').value;
  const prenoms = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const message = document.getElementById('message').value;

  // Affiche une confirmation visuelle
  alert(`Merci ${prenoms}, votre message a bien été envoyé !`);

  // Réinitialise le formulaire
  this.reset();
});

