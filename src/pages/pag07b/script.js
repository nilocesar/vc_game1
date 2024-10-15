events.on("ready", function () {
  $("body").on("nextLiberate", function () {
    scorm.saveObject("list01", true);
  });
});
