require.config({
    paths: {
        jquery: '../lib/jquery-1.11/jquery-1.11.1.min'
    }
});


require(['jquery', 'backTop'], function ($, backTop) {

    /*new backTop.BackTop('#backTop', {
        mode : 'go'

    })*/
    $("#backTop").backTop({
        mode:'move',
        speed:2000,
        pos:200
    })


});