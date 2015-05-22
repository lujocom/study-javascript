!function () {
    'use strict ';
    var a = undefined;

    try{
        if(!a){
            throw new Error("a is undefined");
        }
    }catch (ex){
        console.log("error", ex.message);
    }finally{
        console.log("finally")
    }
    console.log("try-catch -----  end");

    var b = 90;
    console.log(++b);

    var confi = {};
    confi.a = 12;


}();