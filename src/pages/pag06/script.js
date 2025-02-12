events.on("ready", function () {
  const iframe = document.getElementById("iframeGame");
  iframe.focus();

  window.addEventListener("message", function (event) {
    // Processa a mensagem
    if (event.data === "completeFase") {
      navigate.next();
    }
  });
});
