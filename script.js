// load form top every time page get reloaded
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
// end


// for active links
// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').
// forEach(link =>{
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active-links');
//     }
// })
// end

// for scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            }
        // } else {
        //     entry.target.classList.remove('show');
        // }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// end

// for sidemenubar
const menuIcon = document.querySelector('.sidebar-menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebar = document.querySelector('.sidebar');

    menuIcon.addEventListener('click', (event) => {
    event.preventDefault();
    sidebar.classList.add('active');
});

    closeIcon.addEventListener('click', (event) => {
    event.preventDefault();
    sidebar.classList.remove('active');
});

    document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});
// end

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
    if(this.scrollY > 200){
        navbar.classList.add('slidedown');
    }
    else{
        navbar.classList.remove('slidedown');
    }
})