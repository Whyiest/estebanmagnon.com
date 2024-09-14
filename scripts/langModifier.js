// Dictionnaire des chemins vers les fichiers de langues
const languages = {
    en: './assets/langs/lang_en.json',
    fr: './assets/langs/lang_fr.json'
};

// Langue par défaut
let currentLang = 'en';  // Default language


document.addEventListener('DOMContentLoaded', function () {
    switchLang();  // Appelle la fonction quand le DOM est complètement chargé
});


// Fonction pour changer de langue
function switchLang() {
    const langFile = languages[currentLang]; // Récupère le chemin du fichier JSON de la langue actuelle
    console.log(`Attempting to load language file from: ${langFile}`); // Debugging log

    // Récupération du fichier JSON correspondant à la langue actuelle
    fetch(langFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Language file loaded successfully:', data); // Log the data for debugging

            // Vérifie si les données JSON contiennent les éléments attendus
            if (!data.head || !data.navbar || !data.home) {
                throw new Error('Invalid JSON structure');
            }

            updateContent(data); // Met à jour le contenu de la page avec les données du JSON
        })
        .catch(error => {
            console.error("Error loading language file:", error);
        });

    // Bascule entre 'en' et 'fr'
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
}

// Fonction pour mettre à jour le contenu de la page avec les données du JSON
function updateContent(data) {
    // Vérifie que chaque partie des données est présente avant de la manipuler
    if (data.head && data.head.title && data.head.description) {
        document.title = data.head.title;
        document.querySelector('meta[name="description"]').setAttribute("content", data.head.description);
        console.log('Document head updated');
    }

    if (data.navbar) {
        document.querySelector('.nav-list a[href="#about-me"]').innerHTML = data.navbar.about || '';
        document.querySelector('.nav-list a[href="#education"]').innerHTML = data.navbar.education || '';
        document.querySelector('.nav-list a[href="#projects"]').innerHTML = data.navbar.projects || '';
        document.querySelector('.nav-list a[href="#experience"]').innerHTML = data.navbar.experience || '';
        document.querySelector('.nav-list a[href="#values"]').innerHTML = data.navbar.values || '';
        console.log('Navbar updated');
    }

    if (data.home) {
        document.querySelector('.home-text-container h1').innerHTML = data.home.title || '';
        document.querySelector('.home-second-text').innerHTML = data.home.subtitle || '';
        document.getElementById('home-button-contact-text').innerHTML = data.home.contact_button || '';
        document.getElementById('home-button-download-text').innerHTML = data.home.download_cv || '';
        console.log('Home section updated');
    }

    // Vérifie si "about" est présent avant d'accéder aux propriétés
    if (data.about) {
        document.querySelector('.about-me-title').innerHTML = data.about.title || '';
        document.querySelector('.about-me-subtitle').innerHTML = data.about.subtitle || '';
        document.querySelector('#about-text-wrapper').innerHTML = `
            <p class="about-paragraph">${data.about.text1 || ''}</p>
            <p class="about-paragraph">${data.about.text2 || ''}</p>
            <p class="about-paragraph">${data.about.text3 || ''}</p>
        `;
        console.log('About section updated');
    }

    if (data.education && data.education.schools) {
        document.querySelector('.education-title').innerHTML = data.education.title || '';
        document.querySelector('.education-subtitle').innerHTML = data.education.subtitle || '';
        const educationList = document.querySelector('.education-list');
        educationList.innerHTML = ''; // Clear previous content
        data.education.schools.forEach(school => {
            educationList.innerHTML += `
                <div class="education-element-grid animated-element">
                    <div class="education-element-image-container">
                        <img class="education-element-image" src="assets/images/education-${school.name.toLowerCase().replace(/\s+/g, '-')}.png" alt="Logo of ${school.name}">
                    </div>
                    <div class="education-element-text-container">
                        <div class="education-element-title">
                            <h4><span class="colored-text">${school.name}</span></h4>
                        </div>
                        <p class="education-element-date">${school.date}</p>
                        <p class="education-element-legend">${school.description}</p>
                    </div>
                </div>
            `;
        });
        console.log('Education section updated');
    }

    if (data.projects && data.projects.items) {
        document.querySelector('.projects-title').innerHTML = data.projects.title || '';
        document.querySelector('.projects-subtitle').innerHTML = data.projects.subtitle || '';
        const projectsGrid = document.querySelector('.projects-grid-container');
        projectsGrid.innerHTML = ''; // Clear previous content
        data.projects.items.forEach(project => {
            projectsGrid.innerHTML += `
                <div class="projects-grid-component animated-element">
                    <div class="projects-grid-card">
                        <div class="projects-grid-content">
                            <div class="projects-grid-content-image-container">
                                <img class="projects-grid-content-image" src="assets/images/project-${project.name.toLowerCase().replace(/\s+/g, '-')}.png" alt="Image of ${project.name} project">
                            </div>
                            <a class="projects-grid-link" href="${project.link}" target="_blank">
                                <p class="projects-grid-content-tech"><span class="colored-text">${project.tech}</span></p>
                                <p class="projects-grid-content-name">${project.name}</p>
                                <span class="projects-grid-content-view">${project.description}</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        console.log('Projects section updated');
    }

    if (data.experience && data.experience.items) {
        document.querySelector('.experience-title').innerHTML = data.experience.title || '';
        document.querySelector('.experience-subtitle').innerHTML = data.experience.subtitle || '';
        const experienceGrid = document.querySelector('#experience-grid');
        experienceGrid.innerHTML = ''; // Clear previous content
        data.experience.items.forEach(experience => {
            experienceGrid.innerHTML += `
            <div class="experience-element-grid animated-element">
                <div class="experience-element-image-container">
                    <img class="experience-element-image" src="assets/images/experience-${experience.company.toLowerCase().replace(/\s+/g, '-')}.png" alt="Logo of ${experience.company}">
                </div>
                <div class="experience-element-text-container">
                    <h4 class="experience-element-title"><span class="colored-text">${experience.company}</span></h4>
                    <p class="experience-element-job-title">${experience.title}</p> 
                    <p class="experience-element-date">${experience.date}</p>
                    <p class="experience-element-legend">${experience.description}</p>
                </div>
            </div>
        `;
        });
        console.log('Experience section updated');
    }


    if (data.values && data.values.items) {
        document.querySelector('.values-title').innerHTML = data.values.title || '';
        document.querySelector('.values-subtitle').innerHTML = data.values.subtitle || '';
        const valuesGrid = document.querySelector('#values-grid');
        valuesGrid.innerHTML = ''; // Clear previous content
        data.values.items.forEach(value => {
            valuesGrid.innerHTML += `
                <div class="values-container animated-element">
                    <div class="values-image-container">
                        <img class="values-image" src="assets/images/values-${value.name.toLowerCase().replace(/\s+/g, '-')}.svg" alt="${value.name}">
                    </div>
                    <p class="values-element-title">${value.name}</p>
                    <p class="values-element-legend">${value.description}</p>
                </div>
            `;
        });
        console.log('Values section updated');
    }

    if (data.footer) {
        document.getElementById('footer-title').innerHTML = data.footer.title || '';
        document.getElementById('footer-second-title').innerHTML = data.footer.subtitle || '';
        document.querySelector('.footer-mail').innerHTML = data.footer.email || '';
        console.log('Footer updated');
    }
}
