
localStorage.setItem('loadComplete', 'false');

function hideLoader () {

    // Cette fonction est appelée quand le site a chargé

    document.getElementsByClassName('loader-container')[0].style.display = "none";
    localStorage.setItem('loadComplete', 'true');
};