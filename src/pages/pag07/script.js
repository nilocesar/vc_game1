events.on("ready", function () {
  const frames = 20;

  gsap.set("#cover img", {
    maskSize: `${frames * 100}% 100%`,
  });
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  tl.to("#cover img", {
    duration: 3,
    delay: 1,
    maskPosition: `-${(frames - 1) * 100}% 0%`,
    ease: `steps(${frames - 1})`,
  });

  $(".btnSair").on("click", () => {
    bridge.linkEnd();
  });
});
