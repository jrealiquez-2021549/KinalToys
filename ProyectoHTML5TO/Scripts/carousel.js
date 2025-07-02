let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Cambia de imagen cada 5 segundos
}

// Control manual con flechas
function plusSlides(n) {
    clearTimeout(showSlides); // Detiene el carrusel automático al usar las flechas
    slideIndex += n;
    let slides = document.getElementsByClassName("carousel-slide");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    // Si quieres que el carrusel siga automático después de un clic manual, descomenta la siguiente línea:
    // setTimeout(showSlides, 5000); 
}