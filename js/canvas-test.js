KISSY.add('canvas-hello', function (S, require, exprots, module) {
    var Node = require('node'),
        $    = Node.all;

    var canvas = document.getElementById("canvas-hello");
    var context = canvas.getContext("2d");

    if(context){
        context.beginPath();
        context.moveTo(100, 100);//���ʿ�ʼ�ص�
        context.lineTo(700, 700);//������
        context.lineTo(100, 700);//������
        context.lineTo(100, 100);//������
        context.closePath();
        /*
        //���
        context.fillStyle = '#99CC99';//�����ʽ
        context.fill();//���
        */
        //������
        context.lineWidth = 5;//�������
        context.strokeStyle = "#99CC99";//������ʽ
        context.stroke();//����

        context.beginPath();
        context.moveTo(200, 100);
        context.lineTo(700, 600);
        context.closePath();
        context.lineWidth = 2;
        context.strokeStyle = "#CCFF99";
        context.stroke();

    }else{
        alert("���������֧��canvas����������������һ��..")
    }

});

KISSY.use('canvas-hello');