events.on("ready", function () {
  let btn = $(".btn");
  let cont = btn.length;
  let box = $(".box");

  box.addClass("hide");

  for (let index = 0; index <= cont; index++) {
    $(".btn" + index).on("click", function () {
      $(this).addClass("visited");
      $(".box").addClass("hide");
      $(".box" + index).removeClass("hide");
      $(".btn" + (index + 1))
        .removeClass("hide")
        .removeClass("block");
      checkView();
    });
  }

  function checkView() {
    if ($(".btn").length === $(".btn.visited").length) {
      $("body").trigger("nextLiberate");
    }
  }

  $("body").on("nextLiberate", function () {
    $("body").trigger("orquestras", [2, 5]);
  });
});
