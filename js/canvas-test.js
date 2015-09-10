KISSY.add('canvas-hello', function (S, require, exprots, module) {
    var Node = require('node'),
        $    = Node.all;

    var canvas = document.getElementById("canvas-hello");
    var context = canvas.getContext("2d");

    if(context){
        context.beginPath();
        context.moveTo(100, 100);//画笔开始地点
        context.lineTo(700, 700);//结束点
        context.lineTo(100, 700);//结束点
        context.lineTo(100, 100);//结束点
        context.closePath();
        /*
        //填充
        context.fillStyle = '#99CC99';//填充样式
        context.fill();//填充
        */
        //画线条
        context.lineWidth = 5;//线条宽度
        context.strokeStyle = "#99CC99";//线条样式
        context.stroke();//绘制

        context.beginPath();
        context.moveTo(200, 100);
        context.lineTo(700, 600);
        context.closePath();
        context.lineWidth = 2;
        context.strokeStyle = "#CCFF99";
        context.stroke();

    }else{
        alert("该浏览器不支持canvas，请更换浏览器再试一次..")
    }

});

KISSY.use('canvas-hello');