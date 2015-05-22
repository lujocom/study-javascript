$(function () {

    tab.init(function () {
        console.log("execute callBack")
    });

});

tab = {

    init: function (callBack) {
        console.log("init");
        this.bindTabTitleOnClickEvent();
        if(typeof callBack == "function"){
            callBack.apply();
        }
    },
    initFirstSelect: function () {

    },
    bindTabTitleOnClickEvent: function () {

        $('.tab-title li').on('click', function () {
            $('.tab-title li').removeClass('select');
            var $this = $(this);
            $this.addClass('select');

        });
    }
};
