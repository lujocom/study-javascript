KISSY.add('canvas-countDown', function ($, require, exprots, module) {

    var MARGIN_TOP = 60;
    var MARGIN_LEFT = 30;
    var RADIUS = 8;

    var digit = require('canvas-digit');
    var currentShowSecond = 0;
    var balls = [];
    var colors = ["#009966","#FF6600","#FF6666","#009999",
        "#FF6666","#336699","#CC0033","#99CC66","#66CC66","#0099CC"];


    exprots.drawTime = function (endTime, context) {

        if (endTime instanceof Date) {
            currentShowSecond = getCurrentShowSecond(endTime);
        } else {
            return;
        }

        /*if(currentShowSecond <= 0){
            return ;
        }*/

        $.later(function () {
            drawCurrentTime( context);
            updateDrawTime(endTime, context);
        }, 50, true);
    };


    var updateDrawTime = function (endTime, context) {
        var nextShowTime = getCurrentShowSecond(endTime);

        var nextHour = parseInt(nextShowTime /3600),
            nextMinute = parseInt((nextShowTime-nextHour*3600)/60),
            nextSecond = nextShowTime % 60;

        var currHour = parseInt(currentShowSecond / 3600),
            currMinute = parseInt((currentShowSecond - currHour * 3600) / 60),
            currSecond = parseInt(currentShowSecond % 60);

        if(parseInt(nextHour/10) != parseInt(currHour/10)){
            addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(currHour/10));
        }

        if(parseInt(nextHour%10) != parseInt(currHour%10)){
            addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(currHour%10));
        }

        if (parseInt(nextMinute / 10) != parseInt(currMinute / 10)) {
            addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(currMinute % 10));
        }

        if (parseInt(nextMinute % 10) != parseInt(currMinute % 10)) {
            addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(currMinute % 10));
        }

        if(parseInt(nextSecond/10) != parseInt(currSecond/10)){
            addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(currSecond%10));
        }

        if(parseInt(nextSecond%10) != parseInt(currSecond%10)){
            addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(currSecond%10));
        }

        if(nextShowTime != currentShowSecond){
            currentShowSecond = nextShowTime;
        }
        updateBalls(context);
    };

    var addBalls = function (x, y, number) {

        var numberArray = digit.digit[number];
        for (var i = 0; i < numberArray.length; i++) {
            for (var j = 0; j < numberArray[i].length; j++) {
                if (numberArray[i][j]) {
                    var aBall = {
                        x:x+j*2*(RADIUS+1)+(RADIUS+1),
                        y:y+i*2*(RADIUS+1)+(RADIUS+1),
                        r:RADIUS,
                        g:1.5 + Math.random(),
                        vx:Math.pow(-1, Math.ceil(Math.random()*1000))*4,
                        vy:-5,
                        color:colors[Math.floor(Math.random()*colors.length)]
                    };
                    balls.push(aBall);
                }
            }
        }
    };

    var updateBalls = function (context) {

        for(var i = 0; i < balls.length; i ++ ){

            balls[i].x += balls[i].vx;
            balls[i].y += balls[i].vy;
            balls[i].vy += balls[i].g;
            var height = context.canvas.height;
            if (balls[i].y >= height - balls[i].r) {
                balls[i].y = height - balls[i].r;
                balls[i].vy = - balls[i].vy * 0.5;
            }


        }
        console.log("balls : " + balls.length);
        var count = 0;
        for(var i = 0; i < balls.length; i ++){
            if(balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < context.canvas.width){
                balls[count++] = balls[i];
            }
        }

        while(balls.length > Math.min(300, count)){
            balls.pop();
        }

    };

    var getCurrentShowSecond = function (endTime) {
        var currentTime = new Date();
        var residueSecond = endTime.getTime() - currentTime;
        return residueSecond >= 0 ? parseInt(residueSecond/1000):0;
    };

    var drawCurrentTime = function (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        var hour = parseInt(currentShowSecond / 3600),
            minute = parseInt((currentShowSecond - hour * 3600) / 60),
            second = parseInt(currentShowSecond % 60);

        console.log(hour + ":" + minute + ":" + second);

        if(hour > 99 || minute >= 60 || second >= 60){
            return;
        }

        drawNumber(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), context);
        drawNumber(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hour % 10), context);
        drawNumber(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, context);
        drawNumber(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minute / 10), context);
        drawNumber(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minute % 10), context);
        drawNumber(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, context);
        drawNumber(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(second / 10), context);
        drawNumber(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(second % 10), context);

        drawBalls(context);

    };

    var drawNumber = function (x, y, number, context) {

        var numberArray = digit.digit[number];
        for(var i = 0; i<numberArray.length; i ++){
            for(var j = 0; j < numberArray[i].length; j++){
                if(numberArray[i][j]){
                    context.beginPath();
                    context.fillStyle = "#0099CC";
                    context.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2.0*Math.PI);
                    context.closePath();
                    context.fill();

                }
            }

        }
    };

    var drawBalls = function (context) {
        for(var i = 0; i < balls.length; i++){
            context.fillStyle = balls[i].color;
            context.beginPath();
            context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2*Math.PI);
            context.closePath();
            context.fill();
        }
    }

});


KISSY.use('canvas-countDown', function ($, countDown) {
    var WIDTH = 1024;
    var HEIGHT = 600;

    var canvas = document.getElementById('canvas-countDown');
    var context = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    var endTime = new Date();
    endTime.setTime(endTime.getTime()+3600*1000);
    countDown.drawTime(endTime, context);

});