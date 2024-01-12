
/*Animation slide-in*/

const slides = document.querySelectorAll(".slide-in")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=> {
        entry.target.classList.toggle("appear", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
    },
    {threshold: 0,
    }
)

slides.forEach(slides => {
    observer.observe(slides)
})


/* Animation menu dropdown (hamburger) sur les versions mobile */

const menuHamburger = document.querySelector(".menu-hamburger")
const listeHamburger = document.querySelector(".liste-hamburger")

menuHamburger.addEventListener('click',()=>{
listeHamburger.classList.toggle('mobile-menu')
})


/* Trigger du bouton "back to top" au scroll */

const backtotop = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.scrollY > 250) { // show backtotop
        backtotop.style.opacity="1";
        backtotop.style.display = "flex";
        backtotop.style.transition = ".3s";
    } 
    else {
        backtotop.style.opacity= "0";
    }
}

/* Animation curseur personnalisé */

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
innerCursor.style.left = `${x}px`; 
innerCursor.style.top = `${y}px`;
outerCursor.style.left = `${x}px`; 
outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((link) => {
    link.addEventListener("mouseover", ()=>{
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", ()=>{
        innerCursor.classList.remove("grow");
    });
});


/* Animation transition des pages

window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
}
*/

/* Animation transition des pages - complète */

window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchor = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 1000);
}

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 1000);
        });
    }
