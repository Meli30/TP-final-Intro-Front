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


/*boton de ir arriba*/
window.onscroll = function(){

    if(document.documentElement.scrollTop > 100){
        document.querySelector('.scroll-top-container').classList.add('show');
    
    } else {
        document.querySelector('.scroll-top-container')
        .classList.remove('show');
    }
    }
    
    document.querySelector('.scroll-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    
    });
    });