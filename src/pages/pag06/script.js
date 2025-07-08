events.on("ready", function () {
  const iframe = document.getElementById("iframeGame");
  iframe.focus();

  let player = '';
  let scene = "";
  let sprite = '';
  
  if (bridge.dataUser.scene) {
    scene = `&scene=${bridge.dataUser.scene}`;
  }

  if (String(bridge.dataUser.player).toLowerCase() === "boy") {
    player = "?player=1";
    sprite = `&boysSheet0=${bridge.dataUser.boysSheet0}&boysSheet1=${bridge.dataUser.boysSheet1}`;
  }
  if (String(bridge.dataUser.player).toLowerCase() === "baby") {
    player = "?player=2";
    scene = `&scene=${bridge.dataUser.scene+"Baby"}`;
    sprite = `&babySheet0=${bridge.dataUser.babySheet0}`;
  }
  if (String(bridge.dataUser.player).toLowerCase() === "girl") {
    player = "?player=3";
    sprite = `&girlSheet0=${bridge.dataUser.girlSheet0}&girlSheet1=${bridge.dataUser.girlSheet1}`;
  }

  $("#iframeGame").attr(
    "src",
    `../../assets/game/index.html${player}${scene}${sprite}`
  );

  window.addEventListener("message", function (event) {
    // Processa a mensagem
    if (event.data === "completeFase") {
      navigate.next();
    }
  });
});
