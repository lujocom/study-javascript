$(function(){
    $('.link .button').hover(function(){
        var title=$(this).attr('data-tips');
        $('.tip em').text(title);
        var pos=$(this).position().left+12;
        var $tip = $('.tip');
        var dis=($tip.outerWidth()-$(this).outerWidth())/2;
        var l=pos-dis;
        $tip.css({'left':l+'px'}).animate({'top':140,'opacity':1},300);
    },function(){
        var $tip = $('.tip');
        if(!$tip.is(':animated')){
            $tip.animate({'top':100,'opacity':0},300);
        }
    })
})