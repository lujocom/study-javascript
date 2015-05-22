KISSY.add('canvas-canvas', function ($, require, exprots, module) {

    var canvas = document.getElementById('canvas-tangram');
    var context = canvas.getContext('2d');
    var ball = {x:512, y:100, r:20, g:2, vx:-4, vy:0, color:'#FF6666'};

    $.later(function () {
        drawBall();
        updateBallPosition();
        console.log(ball);
    }, 50, true);


    var updateBallPosition = function () {
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vy += ball.g;
        var height = context.canvas.height;
        if (ball.y >= height - ball.r) {
            ball.y = height - ball.r;
            ball.vy = -ball.vy * 0.5;
        }
    };


    var drawBall = function () {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
        context.closePath();
        context.fill();
    }


});


KISSY.use('canvas-canvas');