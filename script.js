function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    let themeButton = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }
}

function welcomeVisitor() {
    let nameInput = document.getElementById("visitorName");
    let welcomeResult = document.getElementById("welcomeResult");
    let name = nameInput.value.trim();

    if (name === "") {
        welcomeResult.innerHTML = "Please enter your name first.";
    } else {
        welcomeResult.innerHTML =
            "Nice to meet you, " + name + "! Welcome to my portfolio.";
    }
}

function changeAccent(color) {
    document.documentElement.style.setProperty("--accent", color);

    document.documentElement.style.setProperty(
        "--accent-light",
        color + "20"
    );
}

function submitMessage() {
    let nameInput = document.getElementById("contactName");
    let messageInput = document.getElementById("contactMessage");
    let contactResult = document.getElementById("contactResult");

    let name = nameInput.value.trim();
    let message = messageInput.value.trim();

    if (name === "" || message === "") {
        contactResult.innerHTML =
            "Please enter your name and a message.";
    } else {
        contactResult.innerHTML =
            "Thanks, " + name + "! Your message was received.";

        nameInput.value = "";
        messageInput.value = "";
    }
}

document.getElementById("currentYear").innerHTML =
    new Date().getFullYear();