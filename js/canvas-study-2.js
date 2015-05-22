KISSY.add('canvas-study-2', function ($, require, exprots, module) {

    var canvas = document.getElementById('canvas-study-1');
    var context = canvas.getContext('2d');

    var lineWidth = 30;



    var drawLine = function (x, y, x2, y2, style, context) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x2, y2);
        context.strokeStyle = style;
        context.closePath();
        context.stroke();
    };

    var drawLineCap = function (x, y, x2, y2, style, context, capStyle) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x2, y2);
        context.lineCap = capStyle;

        context.strokeStyle = style;
        context.lineWidth = lineWidth;
        //context.closePath();
        context.stroke();

    };

    drawLine(100, 100, 100, 700, '#009966', context);
    drawLine(700, 100, 700, 700, '#009966', context);


    drawLineCap(100, 200, 700, 200, '#FFCCCC', context, 'butt');
    drawLineCap(100, 300, 700, 300, '#FF9999', context, 'round');
    drawLineCap(100, 400, 700, 400, '#0099CC', context, 'square');

});


KISSY.use('canvas-study-2');