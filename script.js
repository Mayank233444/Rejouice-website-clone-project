function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".main" });
// --- SETUP END ---


// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll()

function cursorEffect(){
    var page1content = document.querySelector(".page-1-content")
var cursor = document.querySelector(".cursor")

// This one is method 1 but not very smooth
// page1content.addEventListener("mousemove",function(dets){
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets.y + "px";

// })

page1content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })

})
page1content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

function page2Animation(){
    
gsap.from(".elem h1",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".body",
        start: "top 47%",
        end:"top 46%",
        // markers: true,
        scrub:2
    }
})
}
page2Animation()

// function sliderAnimation(){
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView:1,
//         spaceBetween: 30,
//         loop:true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: true,
//         },
//       });
// }

// var tl=gsap.timeline()
// tl.from(".loader h3",{
//     x:200,
//     opacity:0,
//     duration:1,
//     stagger:0.3,
// })
// tl.to(".loader h3",{
//     opacity:0,
//     x:-40,
//     stagger:0.1,
// })
// tl.to(".loader",{
//     opacity:0,
// })
// tl.to(".loader",{
//     display:"none",
// })
