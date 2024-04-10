//Mostrar y ocultar contraseña
var togglee = false;

function mostrar (id) {
    const fieldContraseña = document.getElementById(id);
    togglee = !togglee;
    if (togglee){
        fieldContraseña.setAttribute("type","text");
    } else {
        fieldContraseña.setAttribute("type", "password");
    }
}

//Cambiar de tema
var toggleModo = false;

const btnOscuro = document.querySelector(".btnTemaOscuro");
const parrafo = document.getElementById("hola");
const modoOscuro = () => {
    toggleModo = !toggleModo;
    if (toggleModo){
        //Modo oscuro
    } else {
        //Modo claro
    }
}