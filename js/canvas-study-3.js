KISSY.add('canvas-study-3', function ($, require, exprots, module) {

    exprots.drawPentagram = function (x, y, r, R, context, deg, borderColor, fillColor) {

        context.beginPath();

        for (var i = 0; i < 5; i++) {

            context.lineTo(Math.cos((18 + 72 * i - deg) / 180 * Math.PI) * R + x,
                -Math.sin((18 + 72 * i - deg) / 180 * Math.PI) * R + y);

            context.lineTo(Math.cos((54 + 72 * i - deg) / 180 * Math.PI) * r + x,
                -Math.sin((54 + 72 * i - deg) / 180 * Math.PI) * r + y);
        }

        context.closePath();
        if (borderColor) {
            context.strokeStyle = borderColor;
        }
        if (fillColor) {
            context.fillStyle = fillColor;
        }
        context.stroke();

    };

});


KISSY.use('canvas-study-3', function ($, canvasStydy) {
    var canvas = document.getElementById('canvas-study-3');
    var context = canvas.getContext('2d');
    context.lineWidth = 10;
    context.lineJoin = 'miter';
    context.miterLimit = 30;
    canvasStydy.drawPentagram(300, 300, 100, 10, context, 30, "#FFCCCC");


});