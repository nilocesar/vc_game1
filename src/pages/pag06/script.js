events.on("ready", function () {
  const iframe = document.getElementById("iframeGame");
  iframe.focus();

  console.log(bridge.dataUser);

  let player = '';
  let scene = "";
  let id = '';

  

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

  
  if (bridge.dataUser.scene) {
    scene = `&scene=${bridge.dataUser.scene}`;
  }

  if (bridge.dataUser.id) {
    id = `&id=${bridge.dataUser.id}`;
  }
  
  $("#iframeGame").attr(
    "src",
    `../../assets/game/index.html${player}${scene}${id}`
  );

  window.addEventListener("message", function (event) {
    // Processa a mensagem
    if (event.data === "completeFase") {
      navigate.next();
    }
  });
});
