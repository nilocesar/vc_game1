events.on("ready", function () {
  controlAudio();
  controlFullscreen();
  controlMenu();
  resetSuspendata();
  controlHelp();
});

function controlHelp() {
  function formatarevent(event) {

    const nomesMeses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    console.log("event", event);
    const [dia, mesBase, ano] = event.date.split("/");
   
    const mes = nomesMeses[parseInt(mesBase, 10) - 1];
    const hour = event.hours.toString().padStart(2, "0");
    const minutes = event.minutes;

    const hourFormatada =
      minutes > 0
        ? `${hour}h${minutes.toString().padStart(2, "0")}`
        : `${hour}h`;

    const dataFormatada = `${parseInt(
      dia,
      10
    )} de ${mes}, às ${hourFormatada}.`;

    const enderecoFormatado = `${event.address}, ${event.city} - ${event.state}`;

    console.log("dataFormatada", dataFormatada);

    $(".dateInfo").text(dataFormatada);
    $("a.addressInfo").attr("href", event.link).text(enderecoFormatado);
  }

  function controlAvatar() {
    if (bridge.dataUser) {
      var dataUser = bridge.dataUser;
      var photo = dataUser.photos[dataUser.photos.length - 1];
      var person = dataUser.person;

      $("#cover .base").attr("src", photo);
      $("#cover .person").attr("src", person);

      $(".infoD h4").text(dataUser.textInit);
      $(".infoK h4").text(dataUser.textEnd);


      $(".placa2").addClass("hide");

      let ageType = "";
      if (dataUser.ageType === 'year') {
        ageType = dataUser.age === 1 ? 'ano' : 'anos';
      }
      if (dataUser.ageType === "month") {
        ageType = dataUser.age === 1 ? "mês" : "meses";
      }

      if (dataUser.age){
        $(".placa2").removeClass("hide");
      }
      $(".nameBase").text(dataUser.name + " " + dataUser.surname);
      $(".ageBase").text(dataUser.age + " " + ageType);

      formatarevent(dataUser.event);
    }
  }

  controlAvatar();
}

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
