document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const body = document.body;
    const nav = document.querySelector('nav ul');

    let isAnimating = false;
    let animationFrameId;

    window.addEventListener("scroll", function () {
        if (!isAnimating) {
            animationFrameId = requestAnimationFrame(function () {
                header.classList.toggle("scrolled", window.scrollY > 50);
                // handleAnimation(); // Commenté pour retirer la référence à offresContainer
                isAnimating = false;
            });
            isAnimating = true;
        }
    });

    body.classList.add("loaded");

    function toggleMenu() {
        nav.classList.toggle('show');
    }

    window.addEventListener('resize', function () {
        if (!isAnimating) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(function () {
                // handleAnimation(); // Commenté pour retirer la référence à offresContainer
                isAnimating = false;
            });
            isAnimating = true;
        }
    });

    window.addEventListener('load', function () {
        if (!isAnimating) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(function () {
                // handleAnimation(); // Commenté pour retirer la référence à offresContainer
                isAnimating = false;
            });
            isAnimating = true;
        }
    });

    // Utilisation de IntersectionObserver pour les bulles
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // animateBulles(); // Commenté pour retirer la référence à offresContainer
                observer.unobserve(entry.target);
            }
        });
    });

    // Observez la section des bulles (assurez-vous de retirer le observe si vous ne l'utilisez pas ailleurs)
    // observer.observe(offresContainer);
});
