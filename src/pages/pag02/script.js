events.on("ready", function () {
  setTimeout(() => {
    bridge.statusAudio();
    navigate.next();
  }, 1000 * 6);
});
