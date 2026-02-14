// 1. Logic untuk menghilangkan Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800);
});

// 2. Logic untuk Image Slider (Simple Fade)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 4000; // Ganti gambar setiap 4 detik

function nextSlide() {
    // Hilangkan opacity slide saat ini
    slides[currentSlide].style.opacity = '0';
    
    // Pindah ke index berikutnya (looping)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Munculkan slide baru
    slides[currentSlide].style.opacity = '1';
}

// Jalankan interval slider
setInterval(nextSlide, slideInterval);

// 3. Logic untuk Smooth Scroll (Jika ada internal link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Logic smooth scroll opsional jika diperlukan
    });
});