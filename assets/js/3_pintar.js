function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color
    elemento.style.textDecoration = "underline";
    elemento.style.borderRadius = "20px"
}
const divHello = document.getElementById("hello")
divHello.addEventListener("click", () => {
    pintar(divHello, "yellow")
});