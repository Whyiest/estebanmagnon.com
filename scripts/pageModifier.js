let langState = [false];
// false = original (EN).
// true = modified (FR)

let nightState = [true];
// false = nightmode disabled.
// true = nightmode enabled (original)


// ------------------- LANG MODIFIER -------------------------
function switchLang(langState, nightState) {

    if (langState[0]) {
        changeToEnglish(nightState);
        langState[0] = false;
    } else {
        changeToFrench();
        langState[0] = true;
    }
}

function changeToFrench() {

    let elements;

    elements = document.getElementsByClassName("nav-button");
    elements [0].innerHTML = "A propos";
    elements [1].innerHTML = "Formation";
    elements [2].innerHTML = "Projets";
    elements [3].innerHTML = "Experiences";
    elements [4].innerHTML = "Valeurs";

    document.getElementsByTagName("h1")[0].innerHTML = "J'<span class=\"colored-text\">&#233;tudie </span>les technologies d\'<span\n" +
        "class=\"colored-text\">aujourdhui</span> pour préparer <span class=\"colored-text\">demain</span>. <br><i class=\"fa-solid fa-terminal\"></i>"

    document.getElementById("home-second-text").innerHTML = "Salut ! Je suis Esteban, un étudiant ingénieur passionné par la cybersécurité, qui veux rendre le monde digital de demain plus sécurisé. "

    document.getElementById("home-button-contact-text").innerHTML = "Discutons";

    document.getElementById("home-button-download-text").innerHTML = "Téléchargez mon CV <i class=\"fa-sharp fa-solid fa-circle-down\"></i>"

    document.getElementById("about-me-title").innerHTML = "A PROPOS";

    document.getElementById("about-me-subtitle").innerHTML = "Ravi de vous rencontrer  !";

    elements = document.getElementsByClassName("about-paragraph");
    elements [0].innerHTML = "&emsp;&emsp;&emsp;&emsp;<i class=\"fa-solid fa-user\"></i>&emsp;Je m'apelle Esteban, j'ai 20 ans, je suis actuellement étudiant en école d'ingénieur dans le domaine de la cybersécurité. J'étudie à l'<a class=\"about-link-to-education\" href=\"https://ece.fr\">Ecole Centrale d'Electronique</a> de Lyon et de Paris, et je suis en ce moment en échange universitaire à l'université de <a class=\"about-link-to-education\" href=\"https://mcgill.ca\">Mcgill</a>  au Canada.";
    elements [1].innerHTML = "&emsp;&emsp;&emsp;&emsp;<i class=\"fa-solid fa-graduation-cap\"></i>&emsp;Je suis passioné par les nouvelles technologies et je suis toujours ravi d'apprendre quelque chose de nouveau ! A côté de mes cours, j'ai commencé à multiplier les <a class='about-link-to-education' href='#education'> expériences professionelles</a> afin de dévouvrir un peu plus le monde de l'ingénierie"
    elements [2].innerHTML = "&emsp;&emsp;&emsp;&emsp;<i class=\"fa-brands fa-connectdevelop\"></i>&emsp;Je suis trés motivé par toute opportunité qui me permettrais de développer mes compétences actuelles et d'en acquérir de nouvelles, pourquoi ne pas collaborer ensemble sur un projet ?"


    document.getElementById("education-title").innerHTML = "FORMATIONS";

    document.getElementById("education-subtitle").innerHTML = "Mon parcours scolaire.";

    elements = document.getElementsByClassName("education-element-legend");
    elements [0].innerHTML = "Ecole d'ingénieur basée à Lyon et Paris. Formation : C, C++, SQL, Java, HTML, CSS, JS, graphes, méthode agile...";
    elements [1].innerHTML = "Ecole d'ingénieur basée à Montreal au Canada. Formation : Java, HTML, CSS, JS, API, géopolitique et engagement civique.";
    elements [2].innerHTML = "Echange linguistique à Los Angeles, au sein du campus de l'école UCLA. Passage d'une certfication d'anglais d'un niveau C1.";

    document.getElementById("projects-title").innerHTML = "PROJETS";

    document.getElementById("projects-subtitle").innerHTML = "Découvrez mes projets.";

    elements = document.getElementsByClassName("projects-grid-content-view");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Voir le projet"
    }
    elements[5].innerHTML = "Découvrir";

    elements = document.getElementsByClassName("projects-grid-content-name");
    elements[5].innerHTML = "Voir plus";

    document.getElementById("experience-title").innerHTML = "EXPERIENCE";

    document.getElementById("experience-subtitle").innerHTML = "Mes expériences professionnelles.";

    elements = document.getElementsByClassName("experience-element-duration");
    elements [0].innerHTML = "| 2 mois";
    elements [1].innerHTML = "| 6 mois";
    elements [2].innerHTML = "| 1 an";
    elements [3].innerHTML = "| 1 mois";
    elements [4].innerHTML = "| 1 mois";
    elements [5].innerHTML = "| 1 mois";

    elements = document.getElementsByClassName("experience-element-title");
    elements [1].innerHTML = "<span class=\"colored-text\">Fiverr Freelance</span>";
    elements [2].innerHTML = "<span class=\"colored-text\">Bureau des élèves ECE</span>";

    elements = document.getElementsByClassName("experience-element-legend");
    elements [0].innerHTML = "Support client, préparation de matériel informatique, optimisation d'image Windows, PowerShells.";
    elements [1].innerHTML = "Développement de projets en C et C++, de la conception à la réalisation.";
    elements [2].innerHTML = "Responsable marketing & commercial. Gestion d'une équipe de 8 personnes et d'un budget de 20k euros.";
    elements [3].innerHTML = "Vente et répération d'équipement informatique dans un magasin.";
    elements [4].innerHTML = "Laboratoire de recherche et développement iOT. Création d'une station météo (langage C).";
    elements [5].innerHTML = "BigData, CLoud (AWS, Terraform, Kubernetes, Docker...) et découverte réseau.";

    document.getElementById("values-title").innerHTML = "VALEURS";
    document.getElementById("values-subtitle").innerHTML = "Ce que vous pouvez attendre de moi.";


    elements = document.getElementsByClassName("values-title");
    elements [0].innerHTML = "Adaptabilité";
    elements [1].innerHTML = "Curiosité";
    elements [2].innerHTML = "Esprit d'équipe";

    elements = document.getElementsByClassName("values-legend");
    elements [0].innerHTML = "Parce qu'un projet ne se déroule pas nécessairement comme prévu, il est nécessaire d'être capable de s'adapter à n'importe quelle étape de ce dernier. Je n'ai pas peur de questionner mes choix pour reprendre un projet d'une manière différente.";
    elements [1].innerHTML = "La technologie évolue rapidemment, et continuer à apprendr continuellement des nouvelles choses peu permettre d'aborder un projet depuis des perspectives novatrices.";
    elements [2].innerHTML = "Il n'est pas possible de tout faire soi-même, et même si c'était le cas, communiqué avec son équipe permet de comparé les points de vues et de poussé un projet vers l'avant.";

    document.getElementById("footer-title").innerHTML = "Vous avez un projet en tête ?"
    document.getElementById("footer-second-title").innerHTML = "<span class=\"colored-text\">Discutons ensemble !</span>"
}


function changeToEnglish(nightState) {
    window.location.reload();
    if (!nightState) {
        changeToDay();
    }
}



// ---------------------------------- NIGHT MODE MODIFIER --------------------

function switchLight(pageState) {

    if (pageState[0]) {
        changeToDay();
        pageState[0] = false;
    }
    else {
        changeToNight();
        pageState[0] = true;

    }
}

function changeToDay () {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById('home').style.backgroundColor = "white";
    document.getElementById('about-me').style.backgroundColor = "white";
    document.getElementById('education').style.backgroundColor = "white";
    document.getElementById('projects').style.backgroundColor = "white";
    document.getElementById('experience').style.backgroundColor = "white";
    document.getElementById('values').style.backgroundColor = "white";
    document.getElementById('footer').style.backgroundColor = "black";

    let elements = document.getElementsByTagName('h1');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "black";
    }


    document.getElementById('home-button-download-text').style.color = "black";

    elements = document.getElementsByTagName('h3');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "black";
    }

    elements = document.getElementsByTagName('h4');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "black";
    }

    document.getElementById('home-second-text').style.color = "#252525";

    document.getElementById("about-text-wrapper").style.backgroundColor = "rgba(14,14,19,0.4)";
    elements = document.getElementsByClassName('about-paragraph');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "white";
    }

    elements = document.getElementsByClassName('education-element-grid');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.backgroundColor = "#111111";
    }

    elements = document.getElementsByClassName('projects-grid-card');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.backgroundColor = "black";
    }

    elements = document.getElementsByClassName('projects-grid-content-name');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "white";
    }


    elements = document.getElementsByClassName('experience-element-grid');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.backgroundColor = "#111111";
        elements[i].style.borderRadius = "20px";
    }

    elements = document.getElementsByClassName('experience-element-legend');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "white";
    }

    document.getElementById('footer-title').style.color = "white";

    elements = document.getElementsByClassName('values-legend');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "#252525";
    }

    elements = document.getElementsByClassName('values-title');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "black";
    }
}

function changeToNight () {

    document.body.style.backgroundColor = "#0e0e13";
    document.body.style.color = "white";

    document.getElementById('home').style.backgroundColor = "#0e0e13";
    document.getElementById('about-me').style.backgroundColor = "#1a1a23";
    document.getElementById('education').style.backgroundColor = "#0e0e13";
    document.getElementById('experience').style.backgroundColor = "#0e0e13";
    document.getElementById('projects').style.backgroundColor = "#1a1a23";
    document.getElementById('values').style.backgroundColor = "#1a1a23";
    document.getElementById('footer').style.backgroundColor = "black";

    document.getElementById('home-button-download-text').style.color = "white";

    let elements = document.getElementsByTagName('h1');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    elements = document.getElementsByTagName('h3');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    elements = document.getElementsByTagName('h4');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    document.getElementById('home-second-text').style.color = "white";

    document.getElementById("about-text-wrapper").style.backgroundColor = "rgba(14,14,19,0.4)";

    elements = document.getElementsByClassName('about-paragraph');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    elements = document.getElementsByClassName('education-element-grid');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#0c0b0e";
    }
    elements = document.getElementsByClassName('projects-grid-card');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white";
    }

    elements = document.getElementsByClassName('projects-grid-content-name');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }


    elements = document.getElementsByClassName('experience-element-grid');

    for (let i = 0; i < elements.length; i++) {
        //elements[i].style.backgroundColor = "transparent";
        //elements[i].style.borderRadius = "0";
    }

    elements = document.getElementsByClassName('experience-element-legend');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    document.getElementById('footer-title').style.color = "white";

    elements = document.getElementsByClassName('values-legend');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "lightgrey";
    }

    elements = document.getElementsByClassName('values-title');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }
}