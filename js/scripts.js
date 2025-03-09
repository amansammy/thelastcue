// Ensure page loads at the top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0); // Scroll to top before unloading
};

// Additional safety: Scroll to top on page load
document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0); // Scroll to top when DOM is fully loaded
});


document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;
    const intervalTime = 10000; // 10 seconds per transition

    // Function to update main image
    function updateMainImage(index) {
        mainImage.classList.add('fade-out');
        setTimeout(() => {
            mainImage.src = thumbnails[index].src;
            mainImage.classList.remove('fade-out');
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[index].classList.add('active');
            currentIndex = index;
        }, 500); // Match fade-out transition time
    }

    // Auto-transition
    function startSlideshow() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateMainImage(currentIndex);
        }, intervalTime);
    }

    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateMainImage(index);
        });
    });

    // Initial setup
    thumbnails[0].classList.add('active');
    startSlideshow();
});