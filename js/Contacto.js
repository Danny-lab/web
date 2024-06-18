// Abre el modal al hacer clic en el botón
document.getElementById('openModalC').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    openContactModal();
});

// Cierra el modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modalc');
    if (event.target == modal) {
        closeModalC();
    }
});

function openContactModal() {
    document.getElementById('modalc').style.display = 'flex';
}

function closeModalC() {
    document.getElementById('modalc').style.display = 'none';
}
