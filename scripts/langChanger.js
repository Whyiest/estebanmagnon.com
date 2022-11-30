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
        "class=\"colored-text\">aujourdhui</span> pour préparer <span class=\"colored-text\">demain"

    document.getElementById("home-second-text").innerHTML = "Salut ! Je suis Esteban, un étudiant ingénieur passionné par la cybersécurité, qui veux rendre le monde digital de demain plus sécurisé. "

    document.getElementById("home-button-contact-text").innerHTML = "Discutons";

    document.getElementById("home-button-download-text").innerHTML = "Téléchargez mon CV <i class=\"fa-sharp fa-solid fa-circle-down\"></i>"

    document.getElementById("about-me-title").innerHTML = "A PROPOS";

    document.getElementById("about-me-subtitle").innerHTML = "Ravi de vous rencontrer  !";

    elements = document.getElementsByClassName("about-paragraph");
    elements [0].innerHTML = "Je m'apelle Esteban, j'ai 20 ans, je suis actuellement étudiant en école d'ingénieur dans le domaine de la cybersécurité. J'étudie à l'<a class=\"about-link-to-education\" href=\"https://ece.fr\">Ecole Centrale d'Electronique</a> de Lyon et de Paris, et je suis en ce moment en échange universitaire à l'université de <a class=\"about-link-to-education\" href=\"https://mcgill.ca\">Mcgill</a>  au Canada.";
    elements [1].innerHTML = "Je suis passioné par les nouvelles technologies et je suis toujours ravi d'apprendre quelque chose de nouveau ! A côté de mes cours, j'ai commencé à multiplier les <a class='about-link-to-education' href='#education'> expériences professionelles</a> afin de dévouvrir un peu plus le monde de l'ingénierie"
    elements [2].innerHTML = "Je suis trés motivé par toute opportunité qui me permettrais de développer mes compétences actuelles et d'en acquérir de nouvelles, pourquoi ne pas collaborer ensemble sur un projet ?"


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
    elements [1].innerHTML = "Fiverr Freelance";
    elements [2].innerHTML = "Bureau des élèves ECE";

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

/*
function changeToEnglish(nightState) {
    window.location.reload();
    if (!nightState) {
        changeToDay();
    }
}
*/



function changeToEnglish() {

    let elements;

    elements = document.getElementsByClassName("nav-button");
    elements [0].reset();
    elements [1].reset();
    elements [2].reset();
    elements [3].reset();
    elements [4].reset();

    document.getElementsByTagName("h1")[0].innerHTML = "I'm<span class='colored-text'> studying </span>technologies of <span class='colored-text'>today</span> to prepare <span class='colored-text'>tomorrow</span>."

    document.getElementById("home-second-text").innerHTML = "Hi ! I'm Esteban, a French engineering student passionate about cybersecurity, that want to make tomorrow digital world safer."

    document.getElementById("home-button-contact-text").innerHTML = "Let's talk";

    document.getElementById("home-button-download-text").innerHTML = "Download my CV <i class=\"fa-sharp fa-solid fa-circle-down\"></i>"

    document.getElementById("about-me-title").innerHTML = "ABOUT ME";

    document.getElementById("about-me-subtitle").innerHTML = "Let me introduce myself !";

    elements = document.getElementsByClassName("about-paragraph");
    elements [0].innerHTML = "My name is Esteban, I'm 20 years old, and I'm currently studying cybersecurity engineering and software development. I'm student at <a class=\"about-link-to-education\" href=\"https://ece.fr\">ECE</a> Lyon, an engineering school, but currently I'm in <a class=\"about-link-to-education\" href=\"https://mcgill.ca\">Mcgill</a> at Montreal (Canada) for an exchange program. ";
    elements [1].innerHTML = "I'm passionate about new technologies, and I'm always happy to learn something new ! Side of my courses, I started to multiply <a class=\"about-link-to-education\" href=\"#education\">professionals experiences</a> to discover more about the world of engineering.";
    elements [2].innerHTML = "I'm very motivated to develop my currents skills and acquiring new one by making a cool project with you !";


    document.getElementById("education-title").innerHTML = "EDUCATION";

    document.getElementById("education-subtitle").innerHTML = "My educational background";

    elements = document.getElementsByClassName("education-element-legend");
    elements [0].innerHTML = "Engineering school based in Lyon and Paris. Studying C, C++, SQL, graphs, agil method...";
    elements [1].innerHTML = "Engineering school in Montreal, Canada. Studying HTML, CSS, JS, Bootstrap and Java. Also studying geopolitics and civic engagement.";
    elements [2].innerHTML = "Linguistic exchange in Los Angeles, in UCLA campus. Passing an english certification (C1 level).";

    document.getElementById("projects-title").innerHTML = "PROJECTS";

    document.getElementById("projects-subtitle").innerHTML = "Because theories need to be practiced !";

    elements = document.getElementsByClassName("projects-grid-content-view");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "View project"
    }
    elements[5].innerHTML = "Discover";

    elements = document.getElementsByClassName("projects-grid-content-name");
    elements[5].innerHTML = "View more";

    document.getElementById("experience-title").innerHTML = "EXPERIENCES";

    document.getElementById("experience-subtitle").innerHTML = "My professional background";

    elements = document.getElementsByClassName("experience-element-duration");
    elements [0].innerHTML = "| 2 months";
    elements [1].innerHTML = "| 6 months";
    elements [2].innerHTML = "| 1 year";
    elements [3].innerHTML = "| 1 month";
    elements [4].innerHTML = "| 1 month";
    elements [5].innerHTML = "| 1 month";

    elements = document.getElementsByClassName("experience-element-title");
    elements [1].innerHTML = "Fiverr Freelance";
    elements [2].innerHTML = "Student council ECE";

    elements = document.getElementsByClassName("experience-element-legend");
    elements [0].innerHTML = "Customer support, preparing computer hardware, optimization of Windows images, PowerShell scripts.";
    elements [1].innerHTML = "Development of programs in C and C++. Design and implementation of projects.";
    elements [2].innerHTML = "Head of Marketing and Sales. Management of a team of 8 people and of a 20k euros budget.";
    elements [3].innerHTML = "Sale and repair of computer equipment in a shop.";
    elements [4].innerHTML = "iOT research and development laboratory. Creation of an Arduino weather station (using C).";
    elements [5].innerHTML = "BigData, Cloud (AWS, Terraform, Kubernetes, Docker...) and network discovery.";

    document.getElementById("values-title").innerHTML = "VALUES";
    document.getElementById("values-subtitle").innerHTML = "What to expect about me";


    elements = document.getElementsByClassName("values-title");
    elements [0].innerHTML = "Adaptability";
    elements [1].innerHTML = "Curiosity";
    elements [2].innerHTML = "Team working";

    elements = document.getElementsByClassName("values-legend");
    elements [0].innerHTML = "Because a project doesn't always go the way you plan, it's necessary to be able to adapt to any stage of it, so I'm not afraid to question my choices nor to resume a project in a different way.";
    elements [1].innerHTML = "Technologies evolve rapidly, and continually learning new things can allow you to approach a project from different perspectives than usual.";
    elements [2].innerHTML = "It is not possible to do everything yourself, and even if it were the case, communicating always allows you to compare points of view and push a project forward. I strongly believe in the benefits of teamwork.";

    document.getElementById("footer-title").innerHTML = "Ready to make something cool ?"
    document.getElementById("footer-second-title").innerHTML = "<span class=\"colored-text\">Let's get on a call !</span>"
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

    elements = document.getElementsByClassName('about-paragraph');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "black";
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
    document.getElementById('projects').style.backgroundColor = "#1a1a23";
    document.getElementById('experience').style.backgroundColor = "#0e0e13";
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