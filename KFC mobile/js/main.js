const hamburgerHover = document.querySelector('.hamburgerHover')
const hamburger = document.querySelector('#hamburger')
const hamburger1 = document.querySelector('.hamburger1')
const hamburger2 = document.querySelector('.hamburger2')
const navbar = document.querySelector('.navbar')
const logo = document.querySelector('#logo')
hamburger.addEventListener('click', showMenu)

function showMenu(){
    if(hamburgerHover.style.display == 'flex'){
        hamburgerHover.style.display = 'none'
        navbar.style.display = 'flex'

    } else {
    hamburgerHover.style.display = 'flex'
    hamburgerHover.style.flexDirection = 'column'
    }
}
