KISSY.add('canvas-canvas', function ($, require, exprots, module) {

    var canvas = document.getElementById('canvas-tangram');
    var context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.strokeStyle="#FF6600";
    //圆的x坐标、y坐标、半径、起始位置、结束位置、顺时针还是逆时针(可选参数)
    context.arc(300, 300, 100, 0, 1.5 * Math.PI);
    context.stroke();

    /*context.fillStyle="#009966";
    context.fill();*/


});


KISSY.use('canvas-canvas');