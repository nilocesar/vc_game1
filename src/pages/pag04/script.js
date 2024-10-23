events.on("ready", function () {
  window.addEventListener("message", function (event) {
    // Processa a mensagem
    if (event.data === "completeFase") {
      navigate.next();
    }
  });
});
