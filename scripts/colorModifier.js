let nightState = [true];
// false = nightmode disabled.
// true = nightmode enabled (original)


function switchLight(pageState) {

    if (nightState[0]) {
        changeToDay();
        nightState[0] = false;
    }
    else {
        changeToNight();
        nightState[0] = true;

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