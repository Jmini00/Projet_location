////////////////// menu moble ////////////////////
const mobileMenu = () => {
    const btMobile = document.getElementById('bt-mobile');
    btMobile.addEventListener('click', (e) => {
        console.log(e.target.nextElementSibling);
        btMobile.nextElementSibling.classList.toggle('display')
    })
}


export { mobileMenu };