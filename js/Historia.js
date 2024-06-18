// Obtener el modal
var modalH = document.getElementById("modalH");

// Obtener el botón que abre el modal
var btnOpenModalH = document.getElementById("openModalHs");

// Obtener el elemento <span> que cierra el modal
//var spanClose = document.getElementsByClassName("close")[0];

function closeModalH() {
    document.getElementById('modalH').style.display = 'none';
}

// Cuando el usuario haga clic en el botón, abrir el modal 
btnOpenModalH.onclick = function() {
    modalH.style.display = "flex";
}



// Cuando el usuario haga clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modalH) {
        modalH.style.display = "none";
    }
}


