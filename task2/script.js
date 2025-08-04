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

document.getElementById("themeToggle").addEventListener("click", () => {
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

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Form submitted successfully! ✅");
    }
});

document.getElementById("addTodoBtn").addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    document.getElementById("todoList").appendChild(li);

    input.value = "";
});
