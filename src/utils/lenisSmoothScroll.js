const initSmoothScrolling = () => {
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