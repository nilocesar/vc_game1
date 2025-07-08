events.on("ready", function () {
  controlAudio();
  controlFullscreen();
  controlMenu();
  resetSuspendata();
  controlRef();
});

function criarPhotoFrames(imagens) {
  const container = $(".containerBasePhotos");
  container.empty(); // Limpa o conteúdo anterior, se necessário

  imagens.forEach((src, index) => {
    const stepClass = `step${index + 1}`;
    const frame = $(`
      <div class="photo-frame ${stepClass}">
        <img src="${src}" />
      </div>
    `);
    container.append(frame);
  });
}

function controlRef() {


  function formatarevent(dataUser) {
    const event = dataUser.event;
    const link = dataUser.link;

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

    // console.log("event", event);
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

    const enderecoFormatado = `${event.address}, ${
      event.neighborhood ? event.neighborhood + "," : ""
    } ${event.houseNumber ? event.houseNumber + "," : ""} ${
      event.complement ? event.complement + "," : ""
    } ${event.city} - ${event.state}`;

    // console.log("dataFormatada", dataFormatada);

    $(".dateInfo").text(dataFormatada);
    $("a.addressInfo").attr("href", link).text(enderecoFormatado);
  }

  function controlAvatar() {
    if (bridge.dataUser) {

      // console.log("bridge.dataUser", bridge.dataUser);
      var dataUser = bridge.dataUser;
      var photo = dataUser.photos.main.croppedBlobUrl;
      var person = dataUser.person;

      criarPhotoFrames([
        dataUser.photos.small1.croppedBlobUrl,
        dataUser.photos.small2.croppedBlobUrl,
        dataUser.photos.small3.croppedBlobUrl,
        photo,
        person,
      ]);


      $("#cover .base").attr("src", photo);
      $("#cover .person").attr("src", person);

      $(".infoD h4").text(dataUser.descriptionInit);
      $(".infoK h4").text(dataUser.descriptionEnd);


      $(".placa2").addClass("hide");

      let ageType = "";
      if (dataUser.ageType === 'year') {
        ageType = dataUser.birthday === 1 ? "ano" : "anos";
      }
      if (dataUser.ageType === "month") {
        ageType = dataUser.birthday === 1 ? "mês" : "meses";
      }

      if (dataUser.age){
        $(".placa2").removeClass("hide");
      }
      $(".nameBaseOnly").text(dataUser.name);
      $(".nameBase").text(dataUser.name + " " + dataUser.surname);
      $(".ageBase").text(dataUser.birthday + " " + ageType);

      formatarevent(dataUser);
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
  // console.log("debug", navigate.currentScreen.model.debug);

  window.addEventListener("beforeunload", () => {
    if (navigate.currentScreen.model.debug) {
      scorm.set("cmi.suspend_data", "{}");
    }
  });
}
