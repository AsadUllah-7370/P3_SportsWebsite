var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"

})

gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scoller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -10%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2

    }
})