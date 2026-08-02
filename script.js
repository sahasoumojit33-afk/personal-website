function sayHello() {
    alert("Thanks for visiting my website!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("darkModeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "Light Mode";

        document.querySelectorAll("section").forEach(function(section) {
            section.style.backgroundColor = "";
        });
    } else {
        button.innerHTML = "Dark Mode";
    }
}

function changeBackground(color) {
    document.body.classList.remove("dark-mode");

    document.getElementById("darkModeButton").innerHTML = "Dark Mode";

    document.body.style.backgroundColor = color;

    document.querySelectorAll("section").forEach(function(section) {
        section.style.backgroundColor = color;
    });

    document.querySelectorAll(".card").forEach(function(card) {
        card.style.backgroundColor = "white";
    });
}

document.getElementById("currentYear").textContent =
    new Date().getFullYear();