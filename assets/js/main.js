var modoOscuroo = false;
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
        imgLuna.src="/assets/img/sun.svg";
        btnLuna.textContent = "Modo Claro";
        modoOscuro();
    } else {
        modoClaro();
        const btnLuna = document.getElementById("btnLuna");
        const imgLuna = document.getElementById("imgLuna");
        imgLuna.classList.add("light-mode");
        imgLuna.classList.remove("dark-mode");
        imgLuna.src="/assets/img/moon-fill.svg";
        btnLuna.textContent = "Modo Oscuro";
    }
}

const modoOscuro = () => {
    const navbar = document.querySelector(".navbar");
    const btnIngresar = document.querySelector(".btnIngresar");
    const btnRegistrarse = document.querySelector(".btnRegistrarse");
    const navItem = document.querySelectorAll(".nav-link");
    const configIcon = document.getElementById("configIcon");
    configIcon.src = "/assets/img/gear_white.svg";
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    navItem.forEach(item => {
        item.classList.add("dark-mode");
        item.classList.remove("light-mode");
    });
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
    configIcon.src = "/assets/img/gear.svg";
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    navItem.forEach(item => {
        item.classList.remove("dark-mode");
        item.classList.add("light-mode");
    });
    btnIngresar.classList.replace("btn-outline-light","btn-outline-dark");
    btnRegistrarse.classList.replace("btn-outline-light","btn-outline-dark");
    navbar.setAttribute("data-bs-theme", "light");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-light");
}

const registro = () => {
    alert("*se registra*");
}

const ingreso = () => {
    alert("*ingresa*");
}