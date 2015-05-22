/*KISSY.config('modules',{
    "draw-pentagram":{
        alias:['../canvas/draw-pentagram']
    }

});*/


KISSY.use('../canvas/draw-pentagram', function (S, canvasStudy) {


    var canvas = document.getElementById('canvas-study-3');
    var context = canvas.getContext('2d');

    var width = canvas.width;
    var height = canvas.height;
    context.fillStyle = "black";
    context.fillRect(0,0,width, height);

    for(var i = 0; i < 200; i ++){
        var x = Math.random() * width;
        var y = Math.random() * height;
        var R = Math.random() * 10 ;
        var deg = Math.random() * 360;
        canvasStudy.drawPentagram(x, y, R, context, deg, "#FFFF00", "#FFFF00");

    }

});