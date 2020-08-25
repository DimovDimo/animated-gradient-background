(function gridContainer() {
    let button = document.getElementById("container");
    button.addEventListener("change", gradientChange);
}());

function gradientChange() {
    let container = document.getElementById("container");
    let animationSeconds = document.getElementById("animation-seconds").value;
    container.style.setProperty("animation", `gradient ${animationSeconds}s infinite`);
}

gradientChange();