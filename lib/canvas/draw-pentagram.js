KISSY.add('../canvas/draw-pentagram', function (S, require, exprots) {

    exprots.drawPentagram = function (x, y, R, context, deg, fillColor, borderColor ) {


        context.save();
        context.translate(x, y);
        context.rotate(deg / 180 * Math.PI);
        context.scale(R,R);
        drawPentagramPath(context);
        //context.lineWidth = 3;
        if (borderColor) {
            context.strokeStyle = borderColor;
        }
        if (fillColor) {
            context.fillStyle = fillColor;

        }
        context.fill();
        //context.stroke();
        context.restore();

    };

    var drawPentagramPath = function (context) {
        context.beginPath();

        for (var i = 0; i < 5; i++) {

            context.lineTo(Math.cos((18 + 72 * i) / 180 * Math.PI),
                -Math.sin((18 + 72 * i) / 180 * Math.PI));

            context.lineTo(Math.cos((54 + 72 * i ) / 180 * Math.PI)*0.5,
                -Math.sin((54 + 72 * i) / 180 * Math.PI)*0.5);
        }

        context.closePath();

    }


});