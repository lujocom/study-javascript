/**
 * Created by LujoCom on 2015/5/7.
 */
var result = function () {
    //����Ϊ�����������
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

    //ʹ��forѭ��, ͨ��arraysSimilar������֤���������Ƿ����ƣ�
    // ��������ʾ��ͨ����,����"��ͨ��",���Դ��Ҫ���arraysSimilar����,����Ҫ���������Ҫ��
    for (var i = 0; i < cases.length; i++) {
        if (arraysSimilar(cases[i].arr1, cases[i].arr2) !== cases[i].expect) {
            document.write("��ͨ����case" + (i + 1)
                + "����ȷ��arr1=" + JSON.stringify(cases[i].arr1)
                + ", arr2=" + JSON.stringify(cases[i].arr2)
                + " ���жϽ������" + cases[i].expect);
            return false;
        }
    }
    return true;

}();


function arraysSimilar(arr1, arr2){
    if (arr1 instanceof Array && arr2 instanceof Array) {
        var key1 = [], key2 = [], len = arr1.length, len2 = arr2.length;
        // ����ĳ�������ж�
        if (len != len2) {
            return false;
        }
        // ������ͬ�ж�
        if (len) {
            // ��ȡ�����б�
            for (var i = 0; i < len; i++) {
                // ����1�������б��ִ�
                var item1 = arr1[i], typeFirst = typeOf(item1);
                if (key1.join().indexOf(typeFirst) < 0) {
                    key1.push(typeFirst);
                }
                // ����2�������б��ִ�
                var item2 = arr2[i], typeSecond = typeOf(item2);
                if (key2.join().indexOf(typeSecond) < 0) {
                    key2.push(typeSecond);
                }
            }
            key1 = key1.sort().join(",");
            key2 = key2.sort().join(",");
            // �����ִ��Ƚ�
            if (key1 == key2) {
                return true;
            } else {
                return false;
            }
        } else {
            // ���������
            return true;
        }
    } else {
        // ������
        return false;
    }

}

/**
 * �����жϷ���
 * param item
 * return type(string,function,boolean,number,undefined,null,window,Date,Array,object)
 */
function typeOf(item) {
    var type = typeof item;
    if (type != "object") {
        // �жϻ�������string,function,boolean,number,undefine
    } else if (item === null) {
        // check null
        type = "null";
    } else if (item === window) {
        // check window
        type = "window";
    } else {
        // �ж�object����object,date,array
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

document.write("�ж����:" + (result ? "ͨ��" : "��ͨ��"));