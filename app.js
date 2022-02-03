const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    //The toggle man



    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-link');
    })
    //Animate link
    navlinks.forEach((link,index ) =>{
        console.log(index);
        })
}
navSlide();

