const initSmoothScrolling = () => {
    // fix for id links
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            const id = el.getAttribute('href')?.slice(1)
            if (!id) return
            const target = document.getElementById(id)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
    const lenis = new Lenis({
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
        smooth: true,
    });
    lenis.on('scroll', (e) => {
        console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
};

initSmoothScrolling();