gsap.registerPlugin(ScrollTrigger);


gsap.from(".hero-text", {
    x: '-100%',
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
})
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.t-1',
        start:'top 70%',
        end:'bottom 30%',
        scrub: 2,
        stagger: 1,
    }
})

tl.to(".hero-text", {
    x: '0.5vw',
    duration:2,

});

// gsap.to('marquee', {
//     x: 1000
// })

