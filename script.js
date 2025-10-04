const pages = document.querySelectorAll(".page");
let current = 0;

// Show a page
function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove("active");
        if (i === index) {
            page.classList.add("active");
        }
    });

    // Highlight navbar link
    document.querySelectorAll(".navbar a").forEach(link => {
        link.classList.remove("active");
        if (parseInt(link.dataset.page) === index) {
            link.classList.add("active");
        }
    });

    // Close menu after clicking (mobile)
    document.getElementById("navbar").classList.remove("active");

    // Reset menu button icon (hamburger)
    document.getElementById("menu-btn").innerHTML = `<i class="fas fa-bars"></i>`;
}

// Buttons (Next/Prev)
document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % pages.length;
    showPage(current);
});

document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + pages.length) % pages.length;
    showPage(current);
});

// Navbar clicks
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        current = parseInt(link.dataset.page);
        showPage(current);
    });
});

// 🔹 Toggle navbar on hamburger click
document.getElementById("menu-btn").addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");

    // Change icon (☰ → ✖)
    const menuBtn = document.getElementById("menu-btn");
    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    }
});

// Load first page
showPage(current);// 🌙 Light/Dark Mode Toggle (Switch)
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    modeToggle.checked = true;
}

// Toggle mode on switch change
modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});



// Feedback Form Handling
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackMsg = document.getElementById("feedbackMsg");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault(); // stop form from refreshing page

        // Get values (optional, if you want to use later or send to backend)
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            // Show success message
            feedbackMsg.style.display = "block";

            // Clear form fields
            feedbackForm.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                feedbackMsg.style.display = "none";
            }, 3000);
        }
    });
});
