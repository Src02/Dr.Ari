let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const modal = document.getElementById('serviceModal');

// 1. Controle do Carrossel Hero
function updateCarousel() {
    slides.forEach((s, i) => s.classList.toggle('active', i === slideIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function nextSlide() { 
    if(slides.length > 0) { slideIndex = (slideIndex + 1) % slides.length; updateCarousel(); }
}
let carouselInterval = setInterval(nextSlide, 5000);

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        slideIndex = parseInt(this.getAttribute('data-index'));
        updateCarousel();
        clearInterval(carouselInterval);
        carouselInterval = setInterval(nextSlide, 5000);
    });
});

// 2. Captura dinâmica do conteúdo interno do Card para o Modal
document.querySelectorAll('.service-text-card').forEach(card => {
    card.addEventListener('click', function() {
        const titulo = this.querySelector('h4').innerText;
        const descricao = this.querySelector('.service-description').innerText;
        
        document.getElementById('modalTitle').innerText = titulo;
        document.getElementById('modalDescription').innerText = descricao;
        
        modal.showModal(); 
    });
});

// Fechamento do Modal com clique no botão ou na área externa
document.getElementById('closeModalBtn').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });