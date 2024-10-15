events.on("ready", function () {
  scorm.setCompleted();
  $(".btn").on("click", function () {
    scorm.set("cmi.suspend_data", "{}");
    navigate.goto("pag01");
  });
});
