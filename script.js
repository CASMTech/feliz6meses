// Obtener elementos del DOM
const nombreUsuario = prompt("¿Cuál es el apodo que te tengo?");
const tuNombre = prompt("¿Cuál es mi apodo?");

// Actualizar el nombre en la carta
document.getElementById("nombre").innerText = nombreUsuario;
document.getElementById("tu-nombre").innerText = tuNombre;

