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

    document.getElementsByClassName("home-second-text")[0].innerHTML = "Salut ! Je suis Esteban, un étudiant ingénieur passionné par la cybersécurité, qui veux rendre le monde digital de demain plus sécurisé. "

    document.getElementById("home-button-contact-text").innerHTML = "Discutons";

    document.getElementById("home-button-download-text").innerHTML = "Téléchargez mon CV <i class=\"fa-sharp fa-solid fa-circle-down\"></i>"

    document.getElementsByClassName("about-me-title")[0].innerHTML = "A PROPOS";

    document.getElementsByClassName("about-me-subtitle")[0].innerHTML = "Ravi de vous rencontrer  !";

    elements = document.getElementsByClassName("about-paragraph");
    elements [0].innerHTML = "<i class=\"fa-solid fa-user\"></i>&emsp;Je m'apelle Esteban, j'ai 20 ans et je suis actuellement étudiant en école d'ingénieur dans le domaine de la cybersécurité. J'étudie à l'<a class=\"about-link-to-education\" href=\"https://ece.fr\">Ecole Centrale d'Electronique</a> (Lyon / Paris).";
    elements [1].innerHTML = "<i class=\"fa-solid fa-graduation-cap\"></i>&emsp;Je suis passioné par les nouvelles technologies et je suis toujours ravi d'apprendre quelque chose de nouveau ! A côté de mes cours, j'ai commencé à multiplier les <a class=\'about-link-to-education\' href=\'#education\'> expériences professionelles</a> afin de découvrir un peu plus le monde de l'ingénierie."
    elements [2].innerHTML = "<i class=\"fa-brands fa-connectdevelop\"></i>&emsp;Je suis trés motivé par toute opportunité qui me permettrais de développer mes compétences actuelles et d'en acquérir de nouvelles. Pourquoi ne pas collaborer ensemble sur un projet ?"


    document.getElementsByClassName("education-title")[0].innerHTML = "FORMATIONS";

    document.getElementsByClassName("education-subtitle")[0].innerHTML = "Mon parcours scolaire.";

    elements = document.getElementsByClassName("education-element-legend");
    elements [0].innerHTML = "École d'ingénieur basée à Lyon et Paris. Master en cybersécurité. Ecole labélisée EduSecnum par l'ANSSI.";
    elements [1].innerHTML = "École d'ingénieur basée à Montreal au Canada. Formation : programmation avancée, géopolitique et engagement civique.";
    elements [2].innerHTML = "Échange linguistique à Los Angeles, au sein du campus de l'école UCLA. Passage d'une certification d'anglais d'un niveau C1.";

    document.getElementsByClassName("projects-title")[0].innerHTML = "PROJETS";

    document.getElementsByClassName("projects-subtitle")[0].innerHTML = "Découvrez mes projets.";

    elements = document.getElementsByClassName("projects-grid-content-view");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Voir le projet"
    }
    elements[5].innerHTML = "Découvrir";

    elements = document.getElementsByClassName("projects-grid-content-name");
    elements[5].innerHTML = "Voir plus";

    document.getElementsByClassName("experience-title")[0].innerHTML = "EXPERIENCE";

    document.getElementsByClassName("experience-subtitle")[0].innerHTML = "Mes expériences professionnelles.";

    elements = document.getElementsByClassName("experience-element-date-year");
    elements [0].innerHTML = "Aujourd'hui ";

    elements = document.getElementsByClassName("experience-element-duration");
    elements [0].innerHTML = "| ∞";
    elements [1].innerHTML = "| 2 mois";
    elements [2].innerHTML = "| 2 mois";
    elements [3].innerHTML = "| 2 mois";
    elements [4].innerHTML = "| 6 mois";
    elements [5].innerHTML = "| 1 an";
    elements [6].innerHTML = "| 1 mois";
    elements [7].innerHTML = "| 1 mois";

    elements = document.getElementsByClassName("experience-element-title");
    elements [0].innerHTML = "<span class=\"colored-text\">Vous</span>";
    elements [4].innerHTML = "<span class=\"colored-text\">Fiverr Freelance</span>";
    elements [5].innerHTML = "<span class=\"colored-text\">Bureau des élèves ECE</span>";

    elements = document.getElementsByClassName("experience-element-legend");
    elements [0].innerHTML = "Vous avez un projet intéressant en tête ? Votre entreprise pourrait être la prochaine sur cette liste !";
    elements [1].innerHTML = "Au sein du centre distant de service, prise de contact avec les client afin d'identifier et de résoudre les soucis liés à leur installation.";
    elements [2].innerHTML = "Au sein de l'équipe CloudSecOps du campus Cyber de la Défense, sécurisation d'infrastructures Cloud publiques (AWS & Azure).";
    elements [3].innerHTML = "Support client, préparation de matériel informatique, optimisation d'image Windows, PowerShells.";
    elements [4].innerHTML = "Développement de projets en C et C++, de la conception à la réalisation.";
    elements [5].innerHTML = "Responsable marketing & commercial. Gestion d'une équipe de 8 personnes et d'un budget de 20k euros.";
    elements [6].innerHTML = "Laboratoire de recherche et développement iOT. Création d'une station météo (langage C).";
    elements [7].innerHTML = "BigData, CLoud (AWS, Terraform, Kubernetes, Docker...) et découverte réseau.";

    document.getElementsByClassName("values-title")[0].innerHTML = "VALEURS";
    document.getElementsByClassName("values-subtitle")[0].innerHTML = "Ce que vous pouvez attendre de moi.";


    elements = document.getElementsByClassName("values-element-title");
    elements [0].innerHTML = "Adaptabilité";
    elements [1].innerHTML = "Curiosité";
    elements [2].innerHTML = "Esprit d'équipe";

    elements = document.getElementsByClassName("values-element-legend");
    elements [0].innerHTML = "Parce qu'un projet ne se déroule pas nécessairement comme prévu, il est nécessaire d'être capable de s'adapter à n'importe quelle étape de ce dernier. Je n'ai pas peur de questionner mes choix pour reprendre un projet d'une manière différente.";
    elements [1].innerHTML = "La technologie évolue rapidemment, et continuer à apprendre continuellement des nouvelles choses peut permettre d'aborder un projet avec des perspectives novatrices.";
    elements [2].innerHTML = "Il n'est pas possible de tout faire soi-même et même si c'était le cas, communiquer avec son équipe permet de comparer les points de vues et de pousser un projet vers l'avant.";

    document.getElementById("footer-title").innerHTML = "Vous avez un projet en tête ?"
    document.getElementById("footer-second-title").innerHTML = "<span class=\"colored-text-footer\">Discutons ensemble !</span>"
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

    document.getElementsByClassName('home-second-text')[0].style.color = "#252525";

    document.getElementById("about-text-wrapper").style.backgroundColor = "rgba(14,14,19,0.4)";

    document.getElementsByClassName('about-text-container')[0].style.borderColor = "black";

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

    elements = document.getElementsByClassName('values-element-legend');

    for (let i = 0; i < elements.length ; i ++) {
        elements[i].style.color = "#252525";
    }

    elements = document.getElementsByClassName('values-element-title');

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

    document.getElementsByClassName('home-second-text')[0].style.color = "white";

    document.getElementById('about-text-wrapper').style.backgroundColor = "rgba(14,14,19,0.4)";

    document.getElementsByClassName('about-text-container')[0].style.borderColor = "white";


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

    elements = document.getElementsByClassName('values-element-legend');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "lightgrey";
    }

    elements = document.getElementsByClassName('values-element-title');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }
}