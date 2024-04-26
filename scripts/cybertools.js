function checkRedirect() {
    // Vérifier si l'URL contient la route '/redirect'
    var path = window.location.pathname;
    if (path.includes("/redirect")) {
        var url = new URL(window.location.href);
        var redirectTo = url.searchParams.get("to");
        if (redirectTo) {
            // Ajouter 'http://' ou 'https://' si ce n'est pas déjà inclus
            if (!/^https?:\/\//i.test(redirectTo)) {
                redirectTo = 'http://' + redirectTo;
            }
            // Rediriger vers l'URL spécifiée
            window.location.href = redirectTo;
        }
    }
}
