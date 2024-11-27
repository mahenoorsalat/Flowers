window.onload = function() {
    const tl = gsap.timeline();
    
    tl.to(".one", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.7,
        ease: "expo.inOut"
    })
    .to(".text1", {
        top: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
    })
    .to(".two", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.7,
        ease: "expo.inOut"
    }, "+=1")
    .to(".text1", { 
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    }, "-=1") 
    .to(".text2", {
        top: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
    })
    .to(".three", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.7,
        ease: "expo.inOut"
    }, "+=1")
    .to(".text2", {  
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    }, "-=1")  
    .to(".text3", {
        top: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
    });
};