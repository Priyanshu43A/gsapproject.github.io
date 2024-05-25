function animate() {
  var tl = gsap.timeline();
  tl.from(".logo", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    ease: "expo.inOut",
  });
  tl.from(".nav-items h3, nav button", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    ease: "expo.inOut",
  });
  tl.from(
    ".box1 h1, .box1 p",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      ease: "expo.inOut",
    },
    "saathi"
  );
  tl.from(".box1 button", {
    opacity: 0,
    duration: 0.5,
  });
  tl.from(
    ".box2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "saathi"
  );
}

var tl2 = gsap.timeline();

tl2.to(".brands", {
  x: "-100vw",
  duration: 5,
  repeat: -1,
  ease: "none",
});

document.querySelector(".brands").addEventListener("mouseover", function () {
  tl2.pause();
});

document.querySelector(".brands").addEventListener("mouseleave", function () {
  tl2.play();
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",

    start: "top 50%",
    end: "top -120%",
    scrub: 2,
  },
});

tl3.from(".services", {
  y: "100",
  opacity: "0",
  scrub: false,
  ease: "none",
});

tl3.from(
  "#left1",
  {
    x: "-100",
    opacity: "0",
    duration: 1,
  },
  "bhai"
);

tl3.from(
  "#right1",
  {
    x: "100",
    opacity: "0",
    duration: 1,
  },
  "bhai"
);

tl3.from(
  "#left2",
  {
    x: "-100",
    opacity: "0",
    duration: 1,
  },
  "bhai2"
);

tl3.from(
  "#right2",
  {
    x: "100",
    opacity: "0",
    duration: 1,
  },
  "bhai2"
);

tl3.from(".message", {
  y: "200",
  backgroundColor: "#fff",
  duration: 0.5,
  opacity: "0",
  scrub: false,
  ease: "none",
});

tl3.from(".case-study", {
  y: "200",
  opacity: "0",
  duration: 0.5,
});

tl3.from(".about", {
  backgroundColor: "#fff",
  opacity: 0,
  duration: 0.5,
});

tl3.from(".about-item p", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
});

tl3.from(".about-item button", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
});

animate();

document.querySelector(".logo").addEventListener("mouseover", () => {});
