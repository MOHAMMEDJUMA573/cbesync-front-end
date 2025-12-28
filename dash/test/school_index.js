const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const themeButton = document.querySelector(".theme-toggle-btn");
//drawing canvas
const percento = document.querySelector(".percentNo").innerText;
const size = 100;

/*Menu show*/
menuButton.addEventListener('click', ()=> {
    sideMenu.style.display = 'block';
})
/*menu hide*/
closeButton.addEventListener('click', ()=> {
    sideMenu.style.display = 'none';
})
//
function T1(){
    document.body.classList.toggle('dark-theme-variables');
    /*change the button style after toggle*/
    themeButton.querySelector('span:nth-child(1)').classList.toggle('active');
    themeButton.querySelector('span:nth-child(2)').classList.toggle('active');
}
//T1();
/*theme changer*/
themeButton.addEventListener('click', ()=> {
    T1();
})
//function to draw the circle
for (let i = 0; i <= 2; i++) {
    const circleS = "canvas" + i;
    const canvas = document.querySelector(`.${circleS}`);
    canvas.width = size;
    canvas.height = size;
    //styling
    canvas.style.border = "3px solid"
    canvas.style.margin = "5px";
    //
    const ctx = canvas.getContext("2d");
    drawCircle(ctx, i+1);
}

function drawCircle(ctx, method) {
    ctx.translate(size/2, size/2);
    ctx.beginPath();
    ctx.lineWidth = 3;
    const rad = size * 0.4;
    //
    switch (method) {
        case 1: {
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 8;
            ctx.arc(0, 0, rad, 0, Math.PI * ((1/3)*2));
            break;
        }
        case 2: {
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 8;
            ctx.arc(0, 0, rad, 0, Math.PI * ((1/3)*2));
            break;
        }
        case 3: {
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 8;
            ctx.arc(0, 0, rad, 0, Math.PI * ((1/3)*2));
            break;
        }
    }
    
    ctx.stroke();
}