// Brewed & Co. navigation

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = [
        document.getElementById("explore-menu"),
        document.getElementById("menu-nav")
    ].filter(Boolean);

    menuLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "menu.html";
        });
    });
});