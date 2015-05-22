KISSY.add('canvas-canvas', function ($, require, exprots, module) {

    exprots.draw = function (dataArray, context) {

        console.log(typeof dataArray);

        var p = dataArray.p;
        var color = dataArray.color;
        if (p instanceof Array) {
            var i = 0;
            context.beginPath();
            context.moveTo(p[0].x, p[0].y);
            for(; i < p.length; i ++){
                context.lineTo(p[i].x, p[i].y);
            }

            context.closePath();
            context.fillStyle = color;
            context.fill();

        } else {
            console.log("not array");
        }

    }

});

KISSY.add('tangramDataArray', function ($, require, exports, module) {
    exports.dataArray = [
        {p: [{x: 0, y: 0}, {x: 800, y: 0}, {x: 400, y: 400}], color: "#caff67"},
        {p: [{x: 0, y: 0}, {x: 400, y: 400}, {x: 0, y: 800}], color: "#67becf"},
        {p: [{x: 800, y: 0}, {x: 800, y: 400}, {x: 600, y: 600}, {x: 600, y: 200}], color: "#ef3d61"},
        {p: [{x: 600, y: 200}, {x: 600, y: 600}, {x: 400, y: 400}], color: "#f9f51a"},
        {p: [{x: 400, y: 400}, {x: 600, y: 600}, {x: 400, y: 800}, {x: 200, y: 600}], color: "#a595c0"},
        {p: [{x: 200, y: 600}, {x: 400, y: 800}, {x: 0, y: 800}], color: "#fa8ecc"},
        {p: [{x: 800, y: 400}, {x: 800, y: 800}, {x: 400, y: 800}], color: "#f6ca29"}
    ]
});


KISSY.use('tangramDataArray, canvas-canvas', function ($, dataArr,drawTangram) {

    var canvas = document.getElementById('canvas-tangram');
    var context = canvas.getContext('2d');
    var dataArray = dataArr.dataArray;
    console.log(dataArray);
    if(context){
        var i = 0;
        for(; i < dataArray.length; i ++){
            drawTangram.draw(dataArray[i], context);
        }
    }
});