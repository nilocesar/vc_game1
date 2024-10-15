events.on("ready", function () {
  var tela = navigate.currentScreenUid;
  $(".flex").css("cursor", "pointer");

  $(".flex").on("click", function () {
    $(".btn").removeClass("clicked");
    $(this).find(".btn").addClass("clicked");
    $(".confirm").removeClass("block");

    $("body").attr("res", $(this).attr("res"));
  });

  $(".confirm").on("click", function () {
    var res = $("body").attr("res");
    scorm.saveObject(tela, res);
    $("body").trigger("orquestras", [1, 5]); /// menu 1(pag04) ativar btn 5
    checkPag(res);
  });

  if (scorm.loadObject(tela)) {
    var res = scorm.loadObject(tela);
    checkPag(res);
  }

  function checkPag(res) {
    $("body").trigger("nextLiberate");

    $(".confirm").removeClass("pulse");
    $(".confirm").addClass("block");

    $(".flex").css("pointer-events", "none");

    if (res == 1) {
      $(".correct").addClass("check");
      $(".correct .btn").addClass("clicked");
    } else {
      $(".flex").addClass("check");
      $(".false .btn").addClass("clicked");
    }
  }
});
