events.on("ready", function () {
  $(".body").on("click", function () {
    bridge.statusAudio();
    bridge.fullScreen();
    navigate.next();
  });

  function isSafariOnMac() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const isIos =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return (isSafari && isMac) || isIos;
  }

  if (isSafariOnMac()) {
    document.body.classList.add("ios");
  }

  const desk = document.getElementById("desk");
  desk.addEventListener("timeupdate", () => {
    var tempoRestante = desk.duration - desk.currentTime;
    if (tempoRestante <= 2 && tempoRestante > 0) {
      $(".basePlayer").removeClass("hide");
    }
  });
  const mobile = document.getElementById("mobile");
  mobile.addEventListener("timeupdate", () => {
    var tempoRestante = mobile.duration - mobile.currentTime;
    if (tempoRestante <= 2 && tempoRestante > 0) {
      $(".basePlayer").removeClass("hide");
    }
  });
  $(".videoBG").on("ended", () => {
    $(".basePlayer").removeClass("hide");
  });
});
