events.on("ready", function () {
  $("body").on("nextLiberate", function () {
    scorm.saveObject("list02", true);
  });
});
