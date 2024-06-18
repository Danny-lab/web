// scripts.js

// Obtener el modal
var modal = document.getElementById("photoModal");

// Obtener el enlace que abre el modal por su id
var link = document.getElementById("aboutUsLink");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el enlace, se abre el modal
link.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, se cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
