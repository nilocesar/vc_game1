events.on("ready", function () {
  var event_type = {
    init: "init",
    prev: "prev",
    next: "next",
    go: ["go", "number"],
  };
  var container_ballon = $(".container-instrucoes");
  var _ind = 0;
  var _lastNext = false;
  var indice = 0;

  if (container_ballon.length > 0) {
    container_ballon.on("init", function () {
      controlBallon("init");
    });

    container_ballon.on("prev", function () {
      controlBallon("prev");
    });

    container_ballon.on("next", function () {
      controlBallon("next");
    });

    container_ballon.on("go", function (_this, indice) {
      _ind = indice;
      controlBallon("go");
    });

    container_ballon.trigger("init");
    container_ballon.find(".btn-ballon-prev").on("click", function () {
      container_ballon.trigger("prev");
      // if(indice == 0){
      //   navigate.prev();
      // }
    });

    container_ballon.find(".btn-ballon-next").on("click", function () {
      if (!_lastNext) container_ballon.trigger("next");
      else navigate.next();
    });

    function controlBallon(_status) {
      var allBallon = container_ballon.find(".slide-ballon").length;
      indice = parseInt(container_ballon.find(".nav-ballon").attr("indice"));
      var prev = indice - 1;
      var next = indice + 1;

      if (_status == "prev") {
        indice -= 1;
        if (indice == -1) {
          indice = 0;
        }
      }

      if (_status == "next") {
        indice += 1;
        if (indice == allBallon) {
          indice = allBallon - 1;
        }
      }

      if (_status == "go") {
        indice = _ind;
        if (indice == allBallon) {
          indice = allBallon - 1;
        }
      }

      container_ballon.find(".btn-ballon").css("display", "block");

      if (indice == 0) {
        prev = 0;
        //container_ballon.find('.btn-ballon-prev').css('display', 'none');
      }

      if (indice == allBallon - 1) {
        next = indice;
        _lastNext = true;
        // container_ballon.find('.btn-ballon-next').css('display', 'none');
      } else {
        _lastNext = false;
      }

      container_ballon.find(".nav-ballon").attr("indice", indice);
      container_ballon.find(".slide-ballon").css("display", "none");
      container_ballon.find(".slide-ballon").eq(indice).css("display", "block");
      container_ballon.find(".fundo-ballon").css("max-height", "auto");

      var libras = container_ballon
        .find(".slide-ballon")
        .eq(indice)
        .attr("libras");
      $("body").trigger("libras", [libras]);

      var obj = {
        ind: indice,
        prev: prev,
        next: next,
        container: container_ballon,
      };

      // console.log(obj);

      $("body").trigger("event-instrucoes", [obj]);
    }

    $(document).on("keydown", function (e) {
      let key = e.which || e.keyCode;

      if (key == 9 || key == 37 || key == 38 || key == 39 || key == 40) {
        container_ballon.find("*").each(function () {
          var element = $(this);

          if (element.is(":focus")) {
            container_ballon.find(".slide-ballon").css("display", "block");
            container_ballon.find(".fundo-ballon").css("max-height", "18em");
          }
        });
      }
    });
  }
});
