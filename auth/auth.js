const topLevelBox = document.querySelector('.top-level-box');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
/*wait for a click to activate the cs*/
registerBtn.addEventListener('click', () => {
    topLevelBox.classList.add('active');
});
/*wait for a click to activate the cs*/
loginBtn.addEventListener('click', () => {
    topLevelBox.classList.remove('active');
});