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

    // scroll reveal animated 
    const sr = ScrollReveal({
        origin:'top',
        distance: '60px', 
        duration: 2000,
        delay:400,
        reset: false
    })

    sr.reveal('.shop__container',{reset:true})
    sr.reveal('.home__text, .buds__text', {origin:'left', reset: true})
    sr.reveal('.home__img, .buds__img', {origin:'right'})
    sr.reveal('.specs_heading', {delat: 200,reset: true}, )
    sr.reveal('.specs__details .specs__box', {origin:'left',reset:true, interval:200})
    sr.reveal('.specs__image', {origin:'top',reset:true, delay:600})

})

