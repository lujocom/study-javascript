$(function () {

    $('<img src="../images/img-1.jpg"/>').bind('load', function () {
        var $this = $(this);
        console.log($this.attr('src'));
        $('.img-wrapper').find('img').attr('src', $this.attr('src')).dealImage2Center();
    });

});

(function ($) {
    $.fn.dealImage2Center = function () {

        return this.each(function () {
            var $this = $(this);
            var objHeight = $this[0].clientHeight;//图片高度
            var objWidth = $this[0].clientWidth;//图片宽度
            var _setImageStyle = function (width, height) {
                var parentHeight = $this.parent().height();//图片父容器高度
                var parentWidth = $this.parent().width();//图片父容器宽度
                /*console.log();*/
                var ratio = width / height;

                var tempHeight = parentWidth / ratio;
                var tempWidth = parentHeight * ratio;

                if (tempHeight >= parentHeight) {
                    $this.width(parentWidth);
                    $this.height(tempHeight);
                    $this.css("top", (parentHeight - tempHeight) / 2 + "px")
                } else {
                    $this.height(parentHeight);
                    $this.width(tempWidth);
                    $this.css("left", (parentWidth - tempWidth) / 2 + "px");
                }

                $this.data('loaded', 1);
                $this.css('visibility', 'visible');
            };

            !function () {
                if ($this.hasClass('scrollLoaded')) {//已处理过则跳过
                    return;
                }

                if (objHeight > 0 && objWidth > 0) {
                    _setImageStyle(objWidth, objHeight);
                }
                if (!objHeight || objHeight <= 0 || !objWidth || objWidth <= 0) {
                    var timer = setInterval(function () {
                        if ($this[0].complete) {
                            _setImageStyle($this[0].naturalWidth, $this[0].naturalHeight);
                            clearInterval(timer);
                        }
                    }, 300);
                }
            }();
        });
    }
})(jQuery);