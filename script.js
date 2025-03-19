// JavaScript for Interactivity
document.addEventListener("DOMContentLoaded", function() {
    AOS.init(); // Initialize AOS animations

    const applyButtons = document.querySelectorAll(".apply-btn");
    
    applyButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Application submitted! Our team will review your request.");
        });
    });

    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent successfully!");
        contactForm.reset();
    });

    const exploreBtn = document.querySelector(".hero button");
    exploreBtn.addEventListener("click", function() {
        document.querySelector("#internships").scrollIntoView({ behavior: "smooth" });
    });
});