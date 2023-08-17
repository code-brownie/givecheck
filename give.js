function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();
var timeout;
const mousefollower = (xscale, yscale) => {
  const ms = document.querySelector(".mini-circle");
  window.addEventListener("mousemove", (dets) => {
    ms.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  });
};

const cursorskew = () => {
  var xscale = 1;
  var yscale = 1;

  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY);

    const circle = document.querySelector(".mini-circle");
    const circleSize = 15;

    const circleX = dets.clientX - circleSize / 2;
    const circleY = dets.clientY - circleSize / 2;

    mousefollower(xscale, yscale);
    timeout = setTimeout(() => {
      circle.style.transform = `translate(${circleX}px, ${circleY}px) scale(${1},${1})`;
    }, 100);
  });
};
mousefollower();
cursorskew();
// menu dropdown
const menuFunction = () => {
  const tl = gsap.timeline();

  tl.to(".s2", { y: 27, ease: "power4.out", duration: 0.3 });
  tl.to(".b", {
    y: 26,
    x: 20,
    stagger: 0.06,
    ease: "power4.out",
    duration: 0.3,
  });
};
const arrow = document.querySelector("i");
arrow.addEventListener("click", function () {
  const tl = gsap.timeline();

  tl.to(".b", {
    y: -27,
    x: 20,
    stagger: 0.06,
    ease: "power4.out",
    duration: 0.3,
  });
  tl.to(".s2", { y: -2, ease: "power4.out", duration: 0.3 });
});
// nav end here
// img scrollTrigger

if (window.innerWidth >= 768) {
  gsap.to(".image", {
    y: -100,
    backgroundPositionY: "50%",

    duration: 1.5,

    scrollTrigger: {
      scroller: ".main",
      trigger: ".image",
      start: "top 55%",
      end: "top 0%",
      scrub: 2,
    },
  });
}
// image ends here

gsap.from(".second .title", {
  x: -500,
  duration: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".second .title",
    start: "top 110%",
    end: "bottom 10%",
  },
});
gsap.from(".second .overview", {
  x: 600,
  duration: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".second .overview",
    start: "top 105%",
    end: "bottom 10%",
  },
});
// Challenge starts here

gsap.from(".problem h1", {
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".problem h1",
    scroller: ".main",
    start: "top 100%",
    end: "bottom 10%",
  },
});
gsap.from(".challenge .col-1", {
  x: -500,
  duration: 1,
  scrollTrigger: {
    trigger: ".challenge .col-1",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 10%",
  },
});
gsap.from(".challenge .col-2", {
  x: 800,
  duration: 1,
  scrollTrigger: {
    trigger: ".challenge .col-1",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 10%",
  },
});
gsap.from(".solution-title h1", {
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".solution-title h1",
    scroller: ".main",
    start: "top 100%",
    end: "bottom 10%",
  },
});
gsap.from(".solution .sol-col-1", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".solution .sol-col-1",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 10%",
  },
});
gsap.from(".solution .sol-col-2", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".solution .sol-col-1",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 10%",
  },
});
if (window.innerWidth >= 768) {
  gsap.from(".second .overview", {
    x: 600,
    duration: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".second .overview",
      start: "top 80%",
      end: "bottom 10%",
      markers:true,
    },
  });
  gsap.from(".solution .sol-col-1", {
    x: -1000,
    duration: 1,
    scrollTrigger: {
      trigger: ".solution .sol-col-1",
      scroller: ".main",
      start: "top 200%",
      end: "bottom 10%",
      markers: true,
    },
  });
  gsap.from(".solution .sol-col-2", {
    x: 1000,
    duration: 1,
    scrollTrigger: {
      trigger: ".solution .sol-col-1",
      scroller: ".main",
      start: "top 200%",
      end: "bottom 10%",
    },
  });
}
// challange and sol ends here
const tg = gsap.timeline();
tg.from(".gal-1", {
  x: -500,
  // backgroundPositionX: "-70%",
  duration: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".gal-1",
    start: "top 55%",
    end: "top 0%",
    scrub: 2,
    // pin:true,
    // markers:true
  },
});
tg.from(
  ".gal-2",
  {
    x: 500,
    // backgroundPositionX: "70%",

    duration: 0.6,

    scrollTrigger: {
      scroller: ".main",
      trigger: ".gal-2",
      start: "top 55%",
      end: "top 0%",
      scrub: 2,
    },
  },
  "<50%"
);

const TechFunction = () => {
  const t = gsap.timeline();

  t.to(".tech-bar h3", { y: 27, ease: "power4.out", duration: 0.3 });
  t.to(".st", {
    y: 45,
    x: -30,
    stagger: 0.06,
    ease: "power4.out",
    duration: 0.3,
  });
};

// Close tech stack

const closeTech = () => {
  const t = gsap.timeline();
  t.to(".st", {
    y: -35,
    stagger: 0.06,
    ease: "power4.out",
    duration: 0.3,
  });
  t.to(".tech-bar h3", { y: -5, ease: "power4.out", duration: 0.3 });
};

var cpy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(cpy);

const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");

// Format the time as "hh:mm"
const timeFormat = `${hours}:${minutes}`;

console.log("Current time:", timeFormat);

document.querySelector(".footer-left .date").innerHTML = `${timeFormat}  IST`;
if (innerWidth >= 769) {
  gsap.from(".t", {
    y: -500,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
      scroller: ".main",
      trigger: ".t",
      start: "top 60%",
      end: "botton 30%",
      // scrub: 2,
    },
  });
}
gsap.from(".t", {
  y: -100,
  opacity: 0,
  duration: 0.8,

  scrollTrigger: {
    scroller: ".main",
    trigger: ".t",
    start: "top 60%",
    end: "botton 30%",
    // scrub: 2,
  },
});
