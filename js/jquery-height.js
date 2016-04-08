require.config({
    paths:{
        jquery: '../lib/jquery-1.11/jquery-1.11.1.min'
    }
});

require(['jquery'], function ($) {

    console.log("height : "+$('.container').height());
    console.log("outerHeight : "+$('.container').outerHeight());
    console.log("innerHeight : "+$('.container').innerHeight());


    $('#hello,#world,#test, #java').on('click', function () {
        var $this = $(this);
        $('#test2').addClass('active3');
        $('ul li').addClass('active');
        $('.first').addClass('active2');
        location.hash = $this.attr('id');
    })

    $('body').on('hashchange', function () {
    })

    window.addEventListener("hashchange", function () {
        //alert('hash change : ' + location.hash);

        switch (location.hash){
            case '#hello':
                console.log("hello");break;
            case '#world':
                console.log("world");break;
            case '#test':
                console.log("test");break;
            case '#java':
                console.log("java");break;
        }




    });



});