events.on("ready", function () {
  $(".boxImg .hit").addClass("hide");
  $(".boxImg .plusX").addClass("hide");
  $(".boxImg .fundo").addClass("fundoPB");

  $(".boxImg .hit1").removeClass("hide");
  $(".boxImg .plusX1").removeClass("hide");
  $(".boxImg .fundo1").removeClass("fundoPB");

  $(".boxImg [page]").on("click", function () {
    var page = $(this).attr("page");
    navigate.goto(page);
  });

  if (scorm.loadObject("orquestra2")) {
    var orquestra = scorm.loadObject("orquestra2");

    for (var i = 1; i <= orquestra; i++) {
      $(".boxImg .hit" + i).removeClass("hide");
      $(".boxImg .fundo" + i).removeClass("fundoPB");
      $(".boxImg .plusX" + i).removeClass("hide");
    }

    if (orquestra == 5) {
      $("body").trigger("orquestras", [1, 2]); /// menu 1(pag04) ativar btn 2
      $("body").trigger("nextLiberate");
    }
  }
});
