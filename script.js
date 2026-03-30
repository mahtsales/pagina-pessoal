const root = document.documentElement;
const tiltElements = document.querySelectorAll("[data-tilt]");

window.addEventListener("pointermove", (event) => {
    const x = `${(event.clientX / window.innerWidth) * 100}%`;
    const y = `${(event.clientY / window.innerHeight) * 100}%`;

    root.style.setProperty("--glow-x", x);
    root.style.setProperty("--glow-y", y);
});

tiltElements.forEach((element) => {
    element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const rotateY = ((offsetX / rect.width) - 0.5) * 10;
        const rotateX = (0.5 - (offsetY / rect.height)) * 10;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    element.addEventListener("pointerleave", () => {
        element.style.transform = "";
    });
});
