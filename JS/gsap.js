gsap.set(".follower", { xPercent: -50, yPercent: -50 });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

var follow = document.querySelector(".follower");
var cur = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
  gsap.to(follow, 0.6, { x: e.clientX, y: e.clientY });
});

let bgImage = document.querySelector(".img-container");

//  Now registering thescrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger);

// Now we are going to animate
gsap.fromTo(
  bgImage,
  {
    clipPath: "circle(5% at 77% 40%)",
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",

    //  We want to do that animation on scroll
    scrollTrigger: {
      trigger: bgImage,
      scrub: 1,
      start: "top center",
      end: "top center-=200",
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
