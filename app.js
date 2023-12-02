const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('header nav a')

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
}