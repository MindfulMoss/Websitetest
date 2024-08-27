document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let images = document.querySelectorAll('.image');
    let indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function updateImages() {
        images.forEach((image, index) => {
            image.classList.toggle('active', index === currentIndex);
        });
    }

    function swapImages() {
        if (images.length < 2) return;

        // Update the current index for the next image
        currentIndex = (currentIndex + 1) % images.length;

        updateImages();
        updateIndicators();
    }

    setInterval(swapImages, 2000); // Automatically swap images every 2 seconds
    updateImages(); // Initialize images
    updateIndicators(); // Initialize indicators
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


