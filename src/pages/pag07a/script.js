events.on("ready", function () {
  let btnAcco = $(".accordeon-title");
  let boxText = $(".accordeon-texto");

  btnAcco.find(".check").addClass("hide");

  if (scorm.loadObject("list01")) {
    btnAcco.find(".itz1").addClass("hide");
    btnAcco.find(".check1").removeClass("hide");
  }
  if (scorm.loadObject("list02")) {
    btnAcco.find(".itz2").addClass("hide");
    btnAcco.find(".check2").removeClass("hide");
  }

  if (scorm.loadObject("list01") && scorm.loadObject("list02")) {
    $("body").trigger("nextLiberate");
    $("body").trigger("orquestras", [1, 4]); /// menu 1(pag04) ativar btn 4
  }

  btnAcco.on("click", function () {
    boxText.removeClass("openText");
    btnAcco.removeClass("open");
    $(this).addClass("open");
    $(this).next(".accordeon-texto").addClass("openText");
  });
});
