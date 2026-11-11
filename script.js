// DARK AND LIGHT MODE

const themeButton = document.createElement("button");
themeButton.textContent = "Light Mode";
themeButton.id = "theme-toggle";

document.querySelector("nav").appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    themeButton.textContent =
        document.body.classList.contains("light-mode")
        ? "Dark Mode"
        : "Light Mode";
});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been received.");
        contactForm.reset();
    });
}


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});

console.log("Portfolio loaded successfully!");