events.on("ready", function () {
  $("body").on("nextLiberate", function () {
    $("body").trigger("orquestras", [2, 3]);
  });
});
