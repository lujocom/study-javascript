define(['jquery'], function ($) {

    function ScrollTo(ops) {
        this.ops = $.extend({}, ScrollTo.opsition, ops);
        this.$html = $('html, body');
    }

    ScrollTo.prototype.move = function () {
        var opts = this.ops;

        if (!($(window).scrollTop() == opts.dest || this.$html.is(':animated'))) {

            this.$html.animate({
                scrollTop: opts.dest
            }, opts.speed);
        }
    };

    ScrollTo.prototype.go = function () {
        var dest = this.ops.dest;
        if ($(window).scrollTop() != dest){
            this.$html.scrollTop(dest);
        }

    };

    ScrollTo.opsition = {
        dest: 0,
        speed: 800
    };

    return {
        ScrollTo: ScrollTo
    };
});