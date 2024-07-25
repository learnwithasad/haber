let main = document.querySelector("body");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

var tl = gsap.timeline();

tl.from("#link", {
  x: 200,
  y: -40,
  delay: 0.7,
  duration: 1.5,
  opacity: 0,
  stagger: 0.3,
});

tl.from("#icon", {
  opacity: 0,
  duration: 1.3,
  stagger: 0.3,
});
