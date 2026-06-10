// Smooth scroll already (optional if you already have it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// Contact click animation
const contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach(item => {
    item.addEventListener("click", () => {
        item.style.transform = "scale(0.95)";
        setTimeout(() => {
            item.style.transform = "scale(1)";
        }, 150);
    });
});