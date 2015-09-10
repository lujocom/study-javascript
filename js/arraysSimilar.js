/**
 * Created by LujoCom on 2015/5/7.
 */
var result = function () {
    //以下为多组测试数据
    var cases = [{
        arr1: [1, true, null],
        arr2: [null, false, 100],
        expect: true
    }, {
        arr1: [function () {}, 100],
        arr2: [100, {}],
        expect: false
    }, {
        arr1: [null, 999],
        arr2: [{}, 444],
        expect: false
    }, {
        arr1: [window, 1, true, new Date(), "hahaha", (function () { }), undefined],
        arr2: [undefined, (function () { }), "okokok", new Date(), false, 2, window],
        expect: true
    }, {
        arr1: [new Date()],
        arr2: [{}],
        expect: false
    }, {
        arr1: [window],
        arr2: [{}],
        expect: false
    }, {
        arr1: [undefined, 1],
        arr2: [null, 2],
        expect: false
    }, {
        arr1: [new Object, new Object, new Object],
        arr2: [{}, {}, null],
        expect: false
    }, {
        arr1: null,
        arr2: null,
        expect: false
    }, {
        arr1: [],
        arr2: undefined,
        expect: false
    }, {
        arr1: "abc",
        arr2: "cba",
        expect: false
    }];

    //使用for循环, 通过arraysSimilar函数验证以上数据是否相似，
    // 如相似显示“通过”,否则"不通过",所以大家要完成arraysSimilar函数,具体要求，详见任务要求。
    for (var i = 0; i < cases.length; i++) {
        if (arraysSimilar(cases[i].arr1, cases[i].arr2) !== cases[i].expect) {
            document.write("不通过！case" + (i + 1)
                + "不正确！arr1=" + JSON.stringify(cases[i].arr1)
                + ", arr2=" + JSON.stringify(cases[i].arr2)
                + " 的判断结果不是" + cases[i].expect);
            return false;
        }
    }
    return true;

}();


function arraysSimilar(arr1, arr2){
    if (arr1 instanceof Array && arr2 instanceof Array) {
        var key1 = [], key2 = [], len = arr1.length, len2 = arr2.length;
        // 数组的长度相等判断
        if (len != len2) {
            return false;
        }
        // 类型相同判断
        if (len) {
            // 获取类型列表
            for (var i = 0; i < len; i++) {
                // 数组1的类型列表字串
                var item1 = arr1[i], typeFirst = typeOf(item1);
                if (key1.join().indexOf(typeFirst) < 0) {
                    key1.push(typeFirst);
                }
                // 数组2的类型列表字串
                var item2 = arr2[i], typeSecond = typeOf(item2);
                if (key2.join().indexOf(typeSecond) < 0) {
                    key2.push(typeSecond);
                }
            }
            key1 = key1.sort().join(",");
            key2 = key2.sort().join(",");
            // 类型字串比较
            if (key1 == key2) {
                return true;
            } else {
                return false;
            }
        } else {
            // 空数组相等
            return true;
        }
    } else {
        // 非数组
        return false;
    }

}

/**
 * 类型判断方法
 * param item
 * return type(string,function,boolean,number,undefined,null,window,Date,Array,object)
 */
function typeOf(item) {
    var type = typeof item;
    if (type != "object") {
        // 判断基本类型string,function,boolean,number,undefine
    } else if (item === null) {
        // check null
        type = "null";
    } else if (item === window) {
        // check window
        type = "window";
    } else {
        // 判断object类型object,date,array
        if (item instanceof Date) {
            type = "date";
        } else if (item instanceof Array) {
            type = 'array';
        } else {
            type = 'object';
        }
    }
    return type;
}

var testFor = function () {
    var a = [1, 2, 3, 4, 5];

    for (var b in a) {
        console.log("b : " + b);
        b = 3;
        console.log("b : " + b);
    }

    console.log(a.join(","));

    a = "test";

    if (a instanceof  Array) {
        for (var i = 0; i < a.length; i++) {
            a[i] = 8;
        }
        console.log(a.join(","));
    } else {
        console.log("a is not array");
    }

}();

document.write("判定结果:" + (result ? "通过" : "不通过"));