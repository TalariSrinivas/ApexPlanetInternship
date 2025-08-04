
const textArray = ["Full Stack Developer", "Programmer", "Coder!"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeEffect() {
    if (charIndex < textArray[index].length) {
        typedText.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typedText.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();


document.getElementById("alertButton").addEventListener("click", () => {
    alert("Hello Developer! You clicked the button.");
});

const themeButton = document.getElementById("themeToggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000";
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        document.body.style.backgroundColor = "#0d1117";
        document.body.style.color = "#f1f5f9";
        themeButton.textContent = "☀ Light Mode";
    }
});
