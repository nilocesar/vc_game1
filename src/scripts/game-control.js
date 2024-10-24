events.on("ready", function () {
  controlAudio();
  controlFullscreen();
  controlMenu();
  resetSuspendata();
});

function controlAudio() {
  var audioObj = bridge.statusAudioObj();
  if (audioObj.status == 1) {
    $("header .btnAudio .playAudio").addClass("hide");
    $("header .btnAudio .pauseAudio").removeClass("hide");
  }

  $("header .btnAudio").on("click", function () {
    bridge.statusAudio();

    var audioObj = bridge.statusAudioObj();
    if (audioObj.status == 0) {
      $(this).find(".playAudio").removeClass("hide");
      $(this).find(".pauseAudio").addClass("hide");
    } else {
      $(this).find(".playAudio").addClass("hide");
      $(this).find(".pauseAudio").removeClass("hide");
    }
  });
}

function controlFullscreen() {
  $("header .btnFullscreen").on("click", function () {
    bridge.fullScreen();
  });
}

function controlMenu() {
  $("header .btnHelp").on("click", function () {
    $("#help").removeClass("hide");
  });

  $("#help .modal-closeHelp").on("click", function () {
    $("#help").addClass("hide");
    const iframe = document.getElementById("iframeGame");
    iframe.focus();
  });
}

function resetSuspendata() {
  console.log("debug", navigate.currentScreen.model.debug);

  window.addEventListener("beforeunload", () => {
    if (navigate.currentScreen.model.debug) {
      scorm.set("cmi.suspend_data", "{}");
    }
  });
}
