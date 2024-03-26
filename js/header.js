const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle("main-menu-show");
})


  

/*function agrandarLogo() {
    const logoElement = document.getElementById('logo');

    logoElement.classList.add("agrandado");
}*/

/*const logoElement = document.getElementById('logo');

logoElement.addEventListener('click', ()=>{
    logoElement.classList.toggle("agrandarLogo");
})
*/