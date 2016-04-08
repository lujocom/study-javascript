

function Slider($container, options) {
    var self = this;
    console.log(options);
    self.wrap = $container;
    self.$li = self.wrap.find(options.item);
    self.len = self.$li.length;
    self.currentIndex = 0;
    self.lastNextOpt = options.lastNextOpt;
    self.firstPreviousOpt = options.firstPreviousOpt;
    self.init();
}

Slider.prototype = {

    init: function () {
        var self = this;
        self.bind();
    },
    next: function () {
        var self = this;
        if (self.currentIndex < self.len) {
            $(self.$li[++self.currentIndex]).show();
            $(self.$li[self.currentIndex]).siblings().hide();
        } else {
            console.log(typeof self.lastNextOpt);
            !!self.lastNextOpt && typeof self.lastNextOpt == 'function' && self.lastNextOpt.apply();
        }

    },
    previous: function () {
        var self = this;
        if (self.currentIndex >= 1) {
            $(self.$li[--self.currentIndex]).show();
            $(self.$li[self.currentIndex]).siblings().hide();
        } else if (self.currentIndex <= 0) {
            !!self.firstPreviousOpt && typeof self.firstPreviousOpt == 'function' && self.firstPreviousOpt.apply();
        }
    },
    bind: function () {
        var self = this, startX, startY, x = 0, y = 0,spirit = null;
        function touchStart(event) {

            if (!event.touches || !event.touches.length)
                return;
            var touch = event.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;
        }

        function touchMove(event) {

            if (!event.touches || !event.touches.length)
                return;
            event.preventDefault();
            var touch = event.touches[0];
            x = touch.pageX - startX;
            y = touch.pageY - startY;
        }

        function touchEnd(event) {
            //event.preventDefault();

            //这里是为了手指一定是横向滑动的,原理是计算X位置的偏移要比Y的偏移大
            console.log("x : " + Math.abs(x));
            console.log("y : " + Math.abs(y));
            if (Math.abs(x) > Math.abs(y)) {
                if (x < -100) {
                    self.next();
                } else if (x > 100) {
                    self.previous();
                }
            }
        }

        self.wrap[0].addEventListener("touchstart", touchStart, false);
        self.wrap[0].addEventListener("touchmove", touchMove, false);
        self.wrap[0].addEventListener("touchend", touchEnd, false);

    },
    getCurrentIndex : function () {
        var self = this;
        return self.currentIndex;
    }
};


;(function ($) {
    $.fn.Slider = function (options) {

        var option = $.extend(true, {}, $.fn.Slider.defaults, options), firstInstance;
        this.each(function (i) {
           var that = $(this);
           if(!that.data('slider')){
                var s =  new Slider($(this), option);
               if(!i){
                   firstInstance = s;
                   that.data('slider', s);
               }
           }
        });
        return firstInstance;
    }
})(jQuery);