require.config({
    paths:{
         jquery:'../lib/jquery-1.11/jquery-1.11.1.min'
    }
});


require(['jquery'], function ($) {

    $('body').css("background","red");

});