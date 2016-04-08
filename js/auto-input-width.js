require.config({
    paths:{
        jquery: '../lib/jquery-1.11/jquery-1.11.1.min'
    }
});


require(['jquery'], function ($) {

    var initValue = function ($input, value){
        $input.val(value);
        changeWidth($input);
        //changeWidth_2($input, 'money')
        bindEvent($input);
    };
    var bindEvent = function ($input) {
        if(!$input){
            return ;
        }

        $input.unbind('keydown').bind('keydown', function (e) {
            var $this = $(this);
            //console.log('down');

            var keyCode = e.keyCode;

            //console.log('e : '+JSON.stringify(e));
            console.log('keyCode : '+keyCode);
            console.log('which : '+ e.which);
            var value = $this.val();
            var dotIndex = value.indexOf('.');
            // Backspace键
            if (keyCode == 8)
                return true;
            //输入内容中不包含小数点
            if(keyCode == 190 && dotIndex < 0){
                return true;
            }
            //不是数字禁止输入
            if (!isNumber(keyCode)){
                return false;
            }else{
                if(value.length > 9){
                    return false;
                }
            }
        }).unbind('keyup').bind('keyup', function (e) {
            var $this = $(this);
            changeWidth($this);
            //changeWidth_2($this, 'money')

        });






    };

    var changeWidth = function ($input) {
        var input_size = $input.val().length;
        if(input_size <= 0){
            input_size = 3;
        }
        $input.attr('size', input_size);
    };

    var changeWidth_2 = function ($input, className) {
        $input.width(getTextWidth($input, className));
    };
    
    var getTextWidth = function ($input, className) {
        $('.' + className).remove();
        if(!className){
            className = 'auto'
        }
        var $sone = $('<pre class="'+className+'">'+$input.val()+'</pre>').css({display: 'none'});
        $('body').append($sone);
        return $sone.width();
    };

    var isNumber = function (keyCode) {
        // 数字
        if (keyCode >= 48 && keyCode <= 57)
            return true;
        // 小数字键盘
        return !!(keyCode >= 96 && keyCode <= 105);

    }


    initValue($('#autoText'), '900.00');

});