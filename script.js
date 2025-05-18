// Efecto de scroll suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación para las huellas de gato (opcional)
const huellasGato = document.createElement('div');
huellasGato.className = 'huellas-gato';
huellasGato.innerHTML = '🐾🐾🐾';
document.querySelector('.nosotros').appendChild(huellasGato);