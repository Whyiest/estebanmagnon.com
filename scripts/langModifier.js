let langState = [false];
// false = original (EN).
// true = modified (FR)

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
    elements [0].innerHTML = "À propos";
    elements [1].innerHTML = "Formation";
    elements [2].innerHTML = "Projets";
    elements [3].innerHTML = "Expériences";
    elements [4].innerHTML = "Valeurs";

    document.getElementsByTagName("h1")[0].innerHTML = "J'<span class=\"colored-text\">&#233;tudie </span>les technologies d\'<span\n" +
        "class=\"colored-text\">aujourd'hui</span> pour préparer <span class=\"colored-text\">demain</span>. <br><i class=\"fa-solid fa-terminal\"></i>"

    document.getElementsByClassName("home-second-text")[0].innerHTML = "Salut ! Je suis Esteban, un étudiant ingénieur passionné par la cybersécurité, qui veux rendre le monde digital de demain plus sécurisé."

    document.getElementById("home-button-contact-text").innerHTML = "Discutons";

    document.getElementById("home-button-download-text").innerHTML = "Téléchargez mon CV <i class=\"fa-sharp fa-solid fa-circle-down\"></i>"

    document.getElementsByClassName("about-me-title")[0].innerHTML = "A PROPOS";

    document.getElementsByClassName("about-me-subtitle")[0].innerHTML = "Ravi de vous rencontrer  !";

    elements = document.getElementsByClassName("about-paragraph");
    elements [0].innerHTML = "<i class=\"fa-solid fa-user\"></i>&emsp;Je m'appelle Esteban, j'ai 21 ans et je suis actuellement étudiant en école d'ingénieur dans le domaine de la cybersécurité. J'étudie à l'<a class=\"about-link-to-education\" href=\"https://ece.fr\">Ecole Centrale d'Electronique</a> (Lyon / Paris).";
    elements [1].innerHTML = "<i class=\"fa-solid fa-graduation-cap\"></i>&emsp;Je suis passionné par les nouvelles technologies et je suis toujours ravi d'apprendre quelque chose de nouveau ! À côté de mes cours, j'ai commencé à multiplier les <a class=\'about-link-to-education\' href=\'#education\'> expériences professionnelles</a> afin de découvrir un peu plus le monde de l'ingénierie."
    elements [2].innerHTML = "<i class=\"fa-brands fa-connectdevelop\"></i>&emsp;Je suis très motivé par toute opportunité qui me permettrait de développer mes compétences actuelles et d'en acquérir de nouvelles. Pourquoi ne pas collaborer ensemble sur un projet ?"


    document.getElementsByClassName("education-title")[0].innerHTML = "FORMATIONS";

    document.getElementsByClassName("education-subtitle")[0].innerHTML = "Mon parcours scolaire.";

    elements = document.getElementsByClassName("education-element-legend");
    elements [0].innerHTML = "École d'ingénieur basée à Lyon et Paris. Master en cybersécurité. École labélisée EduSecnum par l'ANSSI.";
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
    elements [1].innerHTML = "Au sein du centre distant de services (CDS), prise de contact avec les clients afin d'identifier et de résoudre les soucis liés à leur installation.";
    elements [2].innerHTML = "Au sein de l'équipe CloudSecOps du campus Cyber de la Défense, sécurisation d'infrastructures Cloud publiques (AWS & Azure).";
    elements [3].innerHTML = "Support client, préparation de matériel informatique, optimisation d'image Windows, PowerShells.";
    elements [4].innerHTML = "Développement de projets en C et C++, de la conception à la réalisation.";
    elements [5].innerHTML = "Responsable marketing & commercial. Gestion d'une équipe de 8 personnes et d'un budget.";
    elements [6].innerHTML = "Laboratoire de recherche et développement iOT. Création d'une station météo (langage C).";
    elements [7].innerHTML = "BigData, Cloud (AWS, Terraform, Kubernetes, Docker...) et découverte réseau.";

    document.getElementsByClassName("values-title")[0].innerHTML = "VALEURS";
    document.getElementsByClassName("values-subtitle")[0].innerHTML = "Ce que vous pouvez attendre de moi.";


    elements = document.getElementsByClassName("values-element-title");
    elements [0].innerHTML = "Adaptabilité";
    elements [1].innerHTML = "Curiosité";
    elements [2].innerHTML = "Esprit d'équipe";

    elements = document.getElementsByClassName("values-element-legend");
    elements [0].innerHTML = "Parce qu'un projet ne se déroule pas nécessairement comme prévu, il est primordial d'être capable de s'adapter à n'importe quelle étape de ce dernier. Je n'ai pas peur de questionner mes choix pour reprendre un projet d'une manière différente.";
    elements [1].innerHTML = "La technologie évolue rapidement, et continuer à apprendre continuellement de nouvelles choses peut permettre d'aborder un projet depuis des perspectives innovantes.";
    elements [2].innerHTML = "Un projet n'rien sans une bonne équipe, communiquer permet de comparer les points de vues et de pousser un projet vers l'avant.";

    document.getElementById("footer-title").innerHTML = "Vous avez un projet en tête ?"
    document.getElementById("footer-second-title").innerHTML = "<span class=\"colored-text-footer\">Discutons ensemble !</span>"
}


function changeToEnglish(nightState) {
    window.location.reload();
}


