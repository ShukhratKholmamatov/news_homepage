const menu = document.getElementById('menu');
const close = document.getElementById('close');
const ul = document.querySelector("ul");

function showMenu() {
    ul.style.display="flex";
}

function closeMenu() {
    ul.style.display = "none";
}