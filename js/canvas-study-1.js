KISSY.add('canvas-study-1', function ($, require, exprots, module) {

    exprots.drawRect = function (x, y, width, height, borderWidth ,borderColor, fillColor, context) {

        context.beginPath();

        context.moveTo(x, y);
        /*context.lineTo(x + width, y);
        context.lineTo(x + width, y+height);
        context.lineTo(x, y + height);*/
        context.rect(x, y, width, height);
        context.closePath();
        context.fillStyle = fillColor;
        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;

        context.fill();
        context.stroke();

    };

    exprots.drawRect2 = function (x, y, width, height, borderWidth ,borderColor, fillColor, context) {


        context.fillStyle = fillColor;
        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;

        context.fillRect(x, y, width, height);
        context.strokeRect(x, y, width, height);

    }


});


KISSY.use('canvas-study-1', function ($, canvasStydy) {
    var canvas = document.getElementById('canvas-study-1');
    var context = canvas.getContext('2d');

    canvasStydy.drawRect(100, 50, 200, 200, 10,"#009966", "#FFCC00", context);
    canvasStydy.drawRect(200, 150, 200, 200, 10,"#009966", "rgba(255, 204, 0, 0.6", context);


});