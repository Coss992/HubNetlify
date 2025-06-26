window.addEventListener("load", () => {
    const loader = document.getElementById("loaderModal");
    setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
    }, 2000);
});

window.addEventListener("mousedown", () => {
    document.body.style.cursor = 'url("img/cursorclick.cur"), auto';
});
window.addEventListener("mouseup", () => {
    document.body.style.cursor = ""; // vuelve al cursor definido en CSS
});
