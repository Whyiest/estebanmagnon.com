

function scrollTrigger(selector){

    /**
     * Récupère tous les éléments de la class demandée et leur ajoute un observeur
     * @type {NodeListOf<*>}
     */

    // On récupère les éléments :
    let elementToObserve = document.querySelectorAll(selector)

    // On les mets dans un array pour pouvoir passer par valeur:
    elementToObserve = Array.from(elementToObserve)

    // Pour chacun on attache un observeur:
    elementToObserve.forEach(el => {
        addObserver(el)
    })
}


function addObserver(elementToObserve){

    /**
     * Cette fonction ajoute l'observeur à la liste des éléments en paramètre
     * @type {IntersectionObserver}
     */

    // On créé un IntersectionObserver en nouvelle instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.


        entries.forEach(entry => {
            // entry.isIntersecting sera true si visible

            if(entry.isIntersecting) {

                // On retire la pause si on le voit
                entry.target.classList.remove('animated-element')

                // We are removing the observer from the element after adding the active class
                observer.unobserve(entry.target)
            }
        })
    })
    // Adding the observer to the element
    observer.observe(elementToObserve)
}
// Example usage
scrollTrigger('.animated-element')