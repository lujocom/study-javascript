KISSY.add('kissy-3-01', function (S, require, exprots, module) {
    var Node = require('node'),
        $    = Node.all;
    var $test = $('#J_test');
    $test.length && $('#J_result').text("ѡ�������нڵ���Ϊ��" + $test.length);
    var id = $test[0].id;
    $("#J_id").text("ѡ�нڵ�idΪ��" + id);
    var $one = Node.one("#J_one");
    $one.text("Node.one()���ڻ�ȡһ���ڵ�");

    var test = function () {
        console.log("test");
    }

    test();

    console.log("test() typeof is "  + typeof test);

});

KISSY.use('kissy-3-01');