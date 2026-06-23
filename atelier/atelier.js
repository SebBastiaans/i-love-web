let turnMe = document.querySelector('img[alt=likkleBoi]')

// turnMe.addEventListener('click', function(){
//     turnMe.classList.add('animation-miniMe')
//     document.querySelector('nav').classList.add('visible-nav')
// })

const nav = document.querySelector('nav')
let lastScrollY = window.scrollY

window.addEventListener('scroll', function(){
    const currentScrollY = window.scrollY

    if(currentScrollY > lastScrollY){
        nav.classList.add('nav-hidden')
    } else {
        nav.classList.remove('nav-hidden')
    }

    lastScrollY = currentScrollY
})

