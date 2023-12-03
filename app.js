const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('header nav a')

var typed = new Typed('#pros', {
    strings: ['web developers', 'mobile application developers', 'CRM developers', 'desktop application developers', 'embedded systems developers'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 800,
    loop: true
  });

// Set the correct menu item active based on scroll position 

window.onscroll = () => {
    sections.forEach( section => {
        const top = window.scrollY
        const offset = section.offsetTop - 150
        const height = section.offsetHeight
        const id = section.getAttribute('id')
        if (top >= offset && top < offset + height) {
            // remove the active class from all links
            links.forEach( link => {
                link.classList.remove('active')
            })
            // add the active class to the link clicked on
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        }
    })
    navbar.classList.remove('active')
    ham.classList.remove('fa-xmark')
    ham.classList.add('fa-bars')
}

// Toggle nav bar 
const ham = document.getElementById('ham')
const navbar = document.getElementById('nav')

ham.onclick = () => {
    ham.classList.toggle('fa-xmark')
    ham.classList.toggle('fa-bars')
    navbar.classList.toggle('active')
}

ScrollReveal({reset: true,
distance: '80px'
})

ScrollReveal().reveal('.aboutus, .section h2', {origin: 'top'})
ScrollReveal().reveal('.image, .section form, .products-container', {origin: 'bottom'})