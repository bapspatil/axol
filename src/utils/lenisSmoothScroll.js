import Lenis from 'lenis'

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

// Get scroll value.
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

// Grab all elements that have a "data-target" attribute
const scrollButtons = document.querySelectorAll('[data-target]')

// For each element, listen to a "click" event
scrollButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()

        // get the DOM element by the ID (data-target value)
        var target = button.dataset.target,
            $el = document.getElementById(target.replace('#', ''))

        // Use lenis.scrollTo() to scroll the page to the right element
        if (target === '#featuresSection') {
            lenis.scrollTo($el, {
                offset: 110,
                immediate: false,
                duration: 1.5,
                easing: (x) =>
                    x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, // https://easings.net
            })
        } else {
            lenis.scrollTo($el, {
                offset: -100,
                immediate: false,
                duration: 1.5,
                easing: (x) =>
                    x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, // https://easings.net
            })
        }
    })
})

requestAnimationFrame(raf)
