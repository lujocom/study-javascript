KISSY.add('kissy-hello', function ($, require, exprots, module) {
    var Node = require('node'),
        $ = Node.all;

    exprots.test = function () {

        var a = [];

        console.log(KISSY.isArray(a));
        console.log(KISSY.isEmptyObject(a));


        $('body').html("KISSY hello world");
    };
});

KISSY.use('kissy-hello', function ($, kissyHello) {
    kissyHello.test();
});