events.on("ready", function () {
  let t1 = gsap.timeline({ paused: true, reversed: true });

  $(".playerBase").on("click", function () {
    $(".player").addClass("hide");
    $(".player").removeClass("pulse");
    // $("body").trigger("nextLiberate");
    $(".btn-next").removeClass("hide");
    t1.play();
  });

  $(".container-arrow-right").off("click");

  $(".container-arrow-right").on("click", function () {
    if (scorm.loadObject("cartaReturn")) {
      navigate.goto("pag04");
    } else {
      navigate.next();
    }
  });

  $(".close").on("click", (e) => {
    setTimeout(() => {
      $(".player").removeClass("hide infinite");
      $(".player").addClass("zoomIn");
    }, 1000 * 2);

    t1.reverse();
  });

  t1.to(
    ".top",
    {
      ease: Power1.easeInOut,
      rotateX: "0deg",
      duration: 0.5,
      zIndex: -1,
    },
    0
  );

  t1.to(
    ".card",
    {
      ease: Power1.easeInOut,
      bottom: "243px",
      scale: 0.95,
      boxShadow: "0 2px 5px 0 rgb(120 116 168 / 42%)",
    },
    0.5
  );

  t1.to(".card", {
    duration: 0.1,
    zIndex: 10,
  });

  t1.to(
    ".card",
    {
      ease: Power1.easeInOut,
      scale: 0.95,
    },
    0.5
  );

  t1.to(
    ".card",
    {
      ease: Power1.easeInOut,
      bottom: "3.3rem",
      scale: 1.35,
      duration: 0.5,
    },
    1
  );
});
