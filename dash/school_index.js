const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const themeButton = document.querySelector(".theme-toggle-btn");

/*Menu show*/
menuButton.addEventListener('click', ()=> {
    sideMenu.style.display = 'block';
})
/*menu hide*/
closeButton.addEventListener('click', ()=> {
    sideMenu.style.display = 'none';
})
/*theme changer*/
themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-variables');
    /*change the button style after toggle*/
    themeButton.querySelector('span:nth-child(1)').classList.toggle('active');
    themeButton.querySelector('span:nth-child(2)').classList.toggle('active');
})