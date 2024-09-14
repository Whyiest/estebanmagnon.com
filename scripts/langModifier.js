// Dictionary of paths to language files
const languages = {
    en: './assets/langs/lang_en.json',  // Path to English language file
    fr: './assets/langs/lang_fr.json'   // Path to French language file
};

// Default language
let currentLang = 'en';  // Set default language to English

// Event listener that runs when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    switchLang();  // Calls the language switching function after the DOM is loaded
});

// Function to switch languages
function switchLang() {
    const langFile = languages[currentLang];  // Get the current language JSON file path
    console.log(`Attempting to load language file from: ${langFile}`);  // Log file path for debugging

    // Fetch the JSON file for the current language
    fetch(langFile)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);  // Throw an error if there's a problem with the request
            }
            return response.json();  // Parse the JSON data
        })
        .then(data => {
            console.log('Language file loaded successfully:', data);  // Log the loaded data for debugging

            // Check if the expected structure is present in the JSON data
            if (!data.head || !data.navbar || !data.home) {
                throw new Error('Invalid JSON structure');  // Throw an error if the structure is invalid
            }

            updateContent(data);  // Update the content of the page with the data from the JSON
        })
        .catch(error => {
            console.error("Error loading language file:", error);  // Log any errors during the fetch operation
        });

    // Toggle between 'en' and 'fr' for language switching
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
}

// Function to update the content of the page with data from the JSON
function updateContent(data) {
    // Update the head section (title and meta description) if present
    if (data.head && data.head.title && data.head.description) {
        document.title = data.head.title;  // Update the document title
        document.querySelector('meta[name="description"]').setAttribute("content", data.head.description);  // Update meta description
        console.log('Document head updated');  // Log the update for debugging
    }

    // Update the navigation bar if present
    if (data.navbar) {
        document.querySelector('.nav-list a[href="#about-me"]').innerHTML = data.navbar.about || '';  // Update "About Me" link
        document.querySelector('.nav-list a[href="#education"]').innerHTML = data.navbar.education || '';  // Update "Education" link
        document.querySelector('.nav-list a[href="#projects"]').innerHTML = data.navbar.projects || '';  // Update "Projects" link
        document.querySelector('.nav-list a[href="#experience"]').innerHTML = data.navbar.experience || '';  // Update "Experience" link
        document.querySelector('.nav-list a[href="#values"]').innerHTML = data.navbar.values || '';  // Update "Values" link
        console.log('Navbar updated');  // Log the update for debugging
    }

    // Update the home section if present
    if (data.home) {
        document.querySelector('.home-text-container h1').innerHTML = data.home.title || '';  // Update home section title
        document.querySelector('.home-second-text').innerHTML = data.home.subtitle || '';  // Update home section subtitle
        document.getElementById('home-button-contact-text').innerHTML = data.home.contact_button || '';  // Update contact button text
        document.getElementById('home-button-download-text').innerHTML = data.home.download_cv || '';  // Update download CV button text
        console.log('Home section updated');  // Log the update for debugging
    }

    // Update the "About Me" section if present
    if (data.about) {
        document.querySelector('.about-me-title').innerHTML = data.about.title || '';  // Update about me title
        document.querySelector('.about-me-subtitle').innerHTML = data.about.subtitle || '';  // Update about me subtitle
        document.querySelector('#about-text-wrapper').innerHTML = `
            <p class="about-paragraph">${data.about.text1 || ''}</p>
            <p class="about-paragraph">${data.about.text2 || ''}</p>
            <p class="about-paragraph">${data.about.text3 || ''}</p>
        `;  // Update about me text
        console.log('About section updated');  // Log the update for debugging
    }

    // Update the education section if present
    if (data.education && data.education.schools) {
        document.querySelector('.education-title').innerHTML = data.education.title || '';  // Update education section title
        document.querySelector('.education-subtitle').innerHTML = data.education.subtitle || '';  // Update education section subtitle
        const educationList = document.querySelector('.education-list');
        educationList.innerHTML = '';  // Clear previous content
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
            `;  // Update education section with school details
        });
        console.log('Education section updated');  // Log the update for debugging
    }

    // Update the projects section if present
    if (data.projects && data.projects.items) {
        document.querySelector('.projects-title').innerHTML = data.projects.title || '';  // Update projects section title
        document.querySelector('.projects-subtitle').innerHTML = data.projects.subtitle || '';  // Update projects section subtitle
        const projectsGrid = document.querySelector('.projects-grid-container');
        projectsGrid.innerHTML = '';  // Clear previous content
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
            `;  // Update projects section with project details
        });
        console.log('Projects section updated');  // Log the update for debugging
    }

    // Update the experience section if present
    if (data.experience && data.experience.items) {
        document.querySelector('.experience-title').innerHTML = data.experience.title || '';  // Update experience section title
        document.querySelector('.experience-subtitle').innerHTML = data.experience.subtitle || '';  // Update experience section subtitle
        const experienceGrid = document.querySelector('#experience-grid');
        experienceGrid.innerHTML = '';  // Clear previous content
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
        `;  // Update experience section with job details
        });
        console.log('Experience section updated');  // Log the update for debugging
    }

    // Update the values section if present
    if (data.values && data.values.items) {
        document.querySelector('.values-title').innerHTML = data.values.title || '';  // Update values section title
        document.querySelector('.values-subtitle').innerHTML = data.values.subtitle || '';  // Update values section subtitle
        const valuesGrid = document.querySelector('#values-grid');
        valuesGrid.innerHTML = '';  // Clear previous content
        data.values.items.forEach(value => {
            valuesGrid.innerHTML += `
                <div class="values-container animated-element">
                    <div class="values-image-container">
                        <img class="values-image" src="assets/images/values-${value.name.toLowerCase().replace(/\s+/g, '-')}.svg" alt="${value.name}">
                    </div>
                    <p class="values-element-title">${value.name}</p>
                    <p class="values-element-legend">${value.description}</p>
                </div>
            `;  // Update values section with values details
        });
        console.log('Values section updated');  // Log the update for debugging
    }

    // Update the footer section if present
    if (data.footer) {
        document.getElementById('footer-title').innerHTML = data.footer.title || '';  // Update footer title
        document.getElementById('footer-second-title').innerHTML = data.footer.subtitle || '';  // Update footer subtitle
        document.querySelector('.footer-mail').innerHTML = data.footer.email || '';  // Update footer email
        console.log('Footer updated');  // Log the update for debugging
    }
}
