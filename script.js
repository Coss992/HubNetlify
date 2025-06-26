// 1) Fade-out del loader tras 2s
window.addEventListener("load", () => {
    const loader = document.getElementById("loaderModal");
    setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
    }, 2000);
});

// 2) Custom cursor siempre activo
(() => {
    const cursor = document.createElement("img");
    cursor.id = "customCursor";
    cursor.src = "img/cursor.png";
    document.body.appendChild(cursor);

    let lastX = 0, lastY = 0;
    function isInteractive() {
        return !!document.elementFromPoint(lastX, lastY)
            ?.closest("a,button,.cursor-pointer");
    }

    document.addEventListener("mousemove", e => {
        lastX = e.clientX;
        lastY = e.clientY;
        cursor.style.left = `${lastX}px`;
        cursor.style.top = `${lastY}px`;
        cursor.src = isInteractive() ? "img/hand.png" : "img/cursor.png";
    });

    document.addEventListener("mousedown", () => {
        cursor.src = isInteractive()
            ? "img/handclick.png"
            : "img/cursorclick.png";
        cursor.style.transform = "translate(-50%, -50%) scale(0.9)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.src = isInteractive() ? "img/hand.png" : "img/cursor.png";
    });
})();
