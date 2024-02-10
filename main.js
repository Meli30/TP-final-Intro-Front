//boton de hamburguesa

const menuOpen = document.getElementById('open-menu');
const menuClose = document.getElementById('close-menu');
const listItems = document.getElementById('listItems')

menuOpen.addEventListener('click', () => {
    console.log("Abrir");
    if (listItems.style.display === "block") {
        listItems.style.display = "none"
    } else {
        listItems.style.display = "block"
    }

})

menuClose.addEventListener('click', () => {
    console.log("close");
    listItems.style.display = "none"
})