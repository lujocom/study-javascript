KISSY.add('kissy-3-01', function (S, require, exprots, module) {
    var Node = require('node'),
        $    = Node.all;
    var $test = $('#J_test');
    $test.length && $('#J_result').text("选择器命中节点数为：" + $test.length);
    var id = $test[0].id;
    $("#J_id").text("选中节点id为：" + id);
    var $one = Node.one("#J_one");
    $one.text("Node.one()用于获取一个节点");

    var test = function () {
        console.log("test");
    }

    test();

    console.log("test() typeof is "  + typeof test);

});

KISSY.use('kissy-3-01');