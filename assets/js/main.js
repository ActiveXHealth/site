var modoOscuroo = true;
window.addEventListener('load', function() {
    var nombre = this.prompt("¿Cómo te llamas?");
    const saludo = this.document.querySelector(".saludo");
    if (nombre == 0){
        saludo.textContent = "Hola de nuevo, lunita";
    } else {
        saludo.textContent = "Hola de nuevo, "+nombre;
    }
    
    // Llamar a la función cuando todos los recursos (incluyendo imágenes y scripts) estén completamente cargados
    modoOscuro();
  });
var toggle = true;
const navItem = document.querySelectorAll(".nav-item");
    navItem.forEach(item => {
        item.classList.add("light-mode");
    });


function modo() {
    modoOscuroo = !modoOscuroo;
    if (modoOscuroo) {
        const btnLuna = document.getElementById("btnLuna");
        const imgLuna = document.getElementById("imgLuna");
        imgLuna.classList.add("dark-mode");
        imgLuna.classList.remove("light-mode");
        imgLuna.src="assets/img/sun.svg";
        btnLuna.textContent = "Modo Claro";
        modoOscuro();
    } else {
        modoClaro();
        const btnLuna = document.getElementById("btnLuna");
        const imgLuna = document.getElementById("imgLuna");
        imgLuna.classList.add("light-mode");
        imgLuna.classList.remove("dark-mode");
        imgLuna.src="assets/img/moon.svg";
        btnLuna.textContent = "Modo Oscuro";
    }
}

const modoOscuro = () => {
    const navbar = document.querySelector(".navbar");
    const btnIngresar = document.querySelector(".btnIngresar");
    const btnRegistrarse = document.querySelector(".btnRegistrarse");
    const navItem = document.querySelectorAll(".nav-link");
    const configIcon = document.getElementById("configIcon");
    const cards = document.querySelectorAll(".card");
    const cardTitles = document.querySelectorAll(".card-title");
    const cardsTexts = document.querySelectorAll(".card-text");
    const saludo = document.querySelector(".saludo");
    const titComida = document.querySelector(".tituloComida");
    const contComidas = document.querySelector(".contComidas");
    const contRutina = document.querySelector(".contRutina");
    contRutina.classList.add("bg-dark");
    contRutina.classList.remove("light-mode");
    contComidas.classList.add("bg-dark")
    contComidas.classList.remove("bg-light")
    titComida.classList.add("dark-mode");
    titComida.classList.remove("light-mode");   
    configIcon.src = "assets/img/gear_white.svg";
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    navItem.forEach(item => {
        item.classList.add("dark-mode");
        item.classList.remove("light-mode");
    });
    cards.forEach(item => {
        item.classList.remove("bg-light");
        item.classList.add("bg-dark");
    });
    cardTitles.forEach(item => {
        item.setAttribute("style","color:white;");
    });
    cardsTexts.forEach(item => {
        item.setAttribute("style","color:white;");
    });
    saludo.setAttribute("style","color:white;")
    btnIngresar.classList.replace("btn-outline-dark", "btn-outline-light");
    btnRegistrarse.classList.replace("btn-outline-dark", "btn-outline-light");
    navbar.setAttribute("data-bs-theme", "dark");
    navbar.classList.remove("bg-light");
    navbar.classList.add("bg-dark");
}

const modoClaro = () => {
    const navbar = document.querySelector(".navbar");
    const btnIngresar = document.querySelector(".btnIngresar");
    const btnRegistrarse = document.querySelector(".btnRegistrarse");
    const navItem = document.querySelectorAll(".nav-link");
    const cards = document.querySelectorAll(".card");
    const cardTitles = document.querySelectorAll(".card-title");
    const cardsTexts = document.querySelectorAll(".card-text");
    const saludo = document.querySelector(".saludo");
    const contComidas = document.querySelector(".contComidas");
    const contRutina = document.querySelector(".contRutina");
    contRutina.classList.remove("bg-dark");
    contRutina.classList.add("light-mode");
    contComidas.classList.remove("bg-dark")
    contComidas.classList.add("light-mode")
    configIcon.src = "assets/img/gear.svg";
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    navItem.forEach(item => {
        item.classList.remove("dark-mode");
        item.classList.add("light-mode");
    });
    cards.forEach(item => {
        item.classList.remove("bg-dark");
        item.classList.add("bg-light");
    });
    cardTitles.forEach(item => {
        item.setAttribute("style","'color:black;'");
    });
    cardsTexts.forEach(item => {
        item.setAttribute("style","'color:black;'");
    });
    saludo.setAttribute("style","'color:black;'")
    btnIngresar.classList.replace("btn-outline-light","btn-outline-dark");
    btnRegistrarse.classList.replace("btn-outline-light","btn-outline-dark");
    navbar.setAttribute("data-bs-theme", "light");
    navbar.removeAttribute("data-bs-theme");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("light-mode");
}

const registro = () => {
    alert("*se registra*");
}

const ingreso = () => {
    alert("*ingresa*");
}

const estructurarConfigIcon = () => {
    const canvas = document.getElementById("offcanvasNavbar");
    const configIcon = document.querySelector(".dropdownsito");

    // Agregar un oyente de eventos para detectar cuando el offcanvas se cierra completamente
    canvas.addEventListener('hidden.bs.offcanvas', function () {
        configIcon.classList.add("dropdown-menu-end");
        canvas.style.maxWidth = "100%"; // Establecer maxWidth en 100% cuando se cierra el offcanvas
    });

    if (canvas.classList.contains("show") || canvas.classList.contains("showing")) {
        configIcon.classList.remove("dropdown-menu-end");
        canvas.style.maxWidth = "75%";
    }
}


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const brua = () => {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}
  