bridge.text_translate = null;
bridge.img_translate = null;
bridge.videos_translate = null;
bridge.links_translate = null;

// $(window).on("beforeunload", function () {
//   localStorage.clear();
// });

// $(window).on("unload", function () {
//   localStorage.clear();
// });

$(window).on(VIEW_EVENT.READY, function () {});

bridge.statusAudio = function () {
  $(".audioTrilha")[0].volume = 0.02;

  console.log("statusAudio", $(".audioTrilha").attr("status"));

  if ($(".audioTrilha").attr("status") == 0) {
    $(".audioTrilha")[0].play();
    $(".audioTrilha").attr("status", 1);
  } else {
    $(".audioTrilha")[0].pause();
    $(".audioTrilha").attr("status", 0);
  }
};

bridge.statusAudioObj = function () {
  return {
    audio: $(".audioTrilha"),
    status: $(".audioTrilha").attr("status"),
  };
};

bridge.statusAudioInit = function () {
  $(".audioTrilha")[0].volume = 0.02;

  $(".audioTrilha")[0].play();
  $(".audioTrilha").attr("status", 1);
};

bridge.fullScreen = function () {
  console.log("fullScreen");
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    console.log("fullScreen1");
    // Verificar se o Fullscreen API é suportado
    let elem = document.documentElement; // ou outro elemento que você deseja colocar em tela cheia

    if (elem.requestFullscreen) {
      elem
        .requestFullscreen()
        .then(() => {
          // Depois que a tela cheia for ativada, mudar a orientação
          if (screen.orientation && screen.orientation.lock) {
            screen.orientation
              .lock("landscape")
              .then(() => {
                console.log("Modo fullscreen e orientação paisagem ativados.");
              })
              .catch((err) => {
                console.error("Erro ao bloquear a orientação:", err);
              });
          } else {
            console.warn("API de orientação de tela não suportada.");
          }
        })
        .catch((err) => {
          console.error("Erro ao entrar em modo fullscreen:", err);
        });
    } else {
      console.warn("Fullscreen API não suportada.");
    }
  }
};
