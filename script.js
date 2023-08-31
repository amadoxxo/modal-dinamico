// Obtener todos los botones "Mostrar Modal"
const botonesMostrarModal = document.querySelectorAll('.mostrar-modal');

// Agregar un evento de clic a cada botón "Mostrar Modal"
botonesMostrarModal.forEach(boton => {
    boton.addEventListener('click', (event) => {
        const modalId = event.target.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Obtener todos los botones para cerrar el modal
const botonesCerrarModal = document.querySelectorAll('.cerrar-modal');

// Agregar un evento de clic a cada botón para cerrar el modal
botonesCerrarModal.forEach(botonCerrar => {
    botonCerrar.addEventListener('click', (event) => {
        const modalId = event.target.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    });
});

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
