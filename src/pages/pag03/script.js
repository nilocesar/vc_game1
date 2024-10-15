events.on('ready', function () {
    
    let btn = $('.btn');
    let btn1 = $('.btn1');
    let btn2 = $('.btn2');
    let confirm = $('.confirm');
    let nao = $('#nao');
    let sim = $('#sim');

    btn.on('click', function() {
        btn.removeClass('clicked');
        $(this).addClass('clicked');

        confirmTrue();
    });

    function confirmTrue() {
        if( btn.hasClass('clicked') ) {
            confirm.removeClass('block');
        }
    }

    confirm.on('click', function() {
        if( btn1.hasClass('clicked') ){
            nao.removeClass('hide');
        }
        if( btn2.hasClass('clicked') ){
            sim.removeClass('hide');
        }
    });

});
  