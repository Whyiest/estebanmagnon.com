// Fonction pour vérifier si un élément est visible dans la fenêtre de défilement
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Fonction pour déclencher l'animation en supprimant la classe animated-element
function scrollTrigger() {
    const elements = document.querySelectorAll('.animated-element');

    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.remove('animated-element'); // Supprime la classe pour lancer l'animation
        }
    });
}

// Écoute l'événement de défilement
window.addEventListener('scroll', scrollTrigger);

// Exécute la fonction immédiatement au chargement pour les éléments déjà visibles
document.addEventListener('DOMContentLoaded', scrollTrigger);
