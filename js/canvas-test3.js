KISSY.add('canvas-canvas', function ($, require, exprots, module) {

    var canvas = document.getElementById('canvas-tangram');
    var context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.strokeStyle="#FF6600";
    //Բ��x���ꡢy���ꡢ�뾶����ʼλ�á�����λ�á�˳ʱ�뻹����ʱ��(��ѡ����)
    context.arc(300, 300, 100, 0, 1.5 * Math.PI);
    context.stroke();

    /*context.fillStyle="#009966";
    context.fill();*/


});


KISSY.use('canvas-canvas');