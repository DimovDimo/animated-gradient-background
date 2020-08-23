(function gridContainer() {
    let button = document.getElementById("container");
    button.addEventListener("change", gradientChange);
}());

function gradientChange() {
    let container = getContainerElement();
    animationSecondsGradient(container);
}

gradientChange();

function getContainerElement() {
    return document.getElementById("container");
}

function animationSecondsGradient(body) {
    let animationSeconds = document.getElementById("animation-seconds").value;
    container.style.setProperty("animation", `gradient ${animationSeconds}s infinite`);
}