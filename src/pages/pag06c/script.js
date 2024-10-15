events.on("ready", function () {
  $(".boxInfoBase").addClass("hide");
  $(".maestro1").removeClass("hide");

  $(".boxInfoBase .balaoM3").on("click", function () {
    var step = $(this).attr("step");

    if (step != "final") {
      $(".boxInfoBase").addClass("hide");
      $("." + step).removeClass("hide");
    } else {
      $("body").trigger("orquestras", [1, 3]); /// menu 1(pag04) ativar btn 3
      navigate.goto("pag04");
    }
  });
});
