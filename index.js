import "./style.css";

function dropdown (main, childArr) {
    childArr.forEach(elem => main.appendChild(elem));
    main.classList.add("dropdown-head")

    const toggleDrop = (visible) => {
        childArr.forEach(elem => elem.classList.toggle("hidden", !visible));
    }

    main.addEventListener("click", () => toggleDrop(true));
    main.addEventListener("mouseleave", () => toggleDrop(false));

    toggleDrop(false);
}

module.exports = dropdown;