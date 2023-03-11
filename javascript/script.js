window.addEventListener('load', (e) => {
    const header = document.querySelector('header');
    const menuIcon = document.querySelector('#menu-icon');
    const navList = document.querySelector('.nav__list')
    window.addEventListener('scroll', (e) => {
        header.classList.toggle('shadow',window.scrollY > 0)
        menuIcon.classList.remove('bx-x')
        navList.classList.remove('active')
    })    
    
    menuIcon.addEventListener('click', ()=>{
        menuIcon.classList.toggle('bx-x')
        navList.classList.toggle('active')
    })

})

