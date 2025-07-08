events.on("ready", function () {
  const iframe = document.getElementById("iframeGame");
  iframe.focus();

  console.log(bridge.dataUser);

  let player = '';
  let scene = "";
  let data = '';

  
  if (bridge.dataUser.scene) {
    scene = `&scene=${bridge.dataUser.scene}`;
  }

  if (String(bridge.dataUser.player).toLowerCase() === "boy") {
    player = "?player=1";
  }
  if (String(bridge.dataUser.player).toLowerCase() === "baby") {
    player = "?player=2";
    scene = `&scene=${bridge.dataUser.scene+"Baby"}`;
  }
  if (String(bridge.dataUser.player).toLowerCase() === "girl") {
    player = "?player=3";
  }

  

  if (bridge.dataUser.data) {
    data = `&data=${bridge.dataUser.data}`;
  }
  
  $("#iframeGame").attr(
    "src",
    `../../assets/game/index.html${player}${scene}${data}`
  );

  window.addEventListener("message", function (event) {
    // Processa a mensagem
    if (event.data === "completeFase") {
      navigate.next();
    }
  });
});
