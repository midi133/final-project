const menu = document.querySelector('.menu-')
const navlist = document.querySelector('.nav-list')

menu.addEventListener('click', function () {
    navlist.classList.toggle('active')
    document.body.classList.toggle('menu-open')
    })

