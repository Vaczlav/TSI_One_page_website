// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the selected slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// === Auto-play for Lightbox modal slideshow ===
setInterval(() => {
    plusSlides(1); // Move to the next slide
}, 4000); // Change every 4 seconds (adjust to 3000 or 5000 if needed)

// === Auto-rotating gallery display on main page ===
let galleryIndex = 0;

function showGallerySlides() {
    const allImages = document.querySelectorAll('#imageGallery .column');
    
    // Hide all images
    allImages.forEach(img => img.style.display = "none");

    // Show 3 images at a time
    for (let i = 0; i < 3; i++) {
        const index = (galleryIndex + i) % allImages.length;
        allImages[index].style.display = "inline-block";
    }

    // Move the gallery window forward
    galleryIndex = (galleryIndex + 1) % allImages.length;
}

// Run on page load
showGallerySlides();
setInterval(showGallerySlides, 3000); // Rotate every 3 seconds
