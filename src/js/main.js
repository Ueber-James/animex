

function menuShow(){
    const menuMobile = document.querySelector('.menu-mobile');
    if(
        menuMobile.classList.contains('active')
    ){
        menuMobile.classList.remove('active');
        document.querySelector('.icon').src = ('/src/img/download.png');
    }else {
        menuMobile.classList.add('active');
        document.querySelector('.icon').src = ('/src/img/fecha.png');
    }

    
}




