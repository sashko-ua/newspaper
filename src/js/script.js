"use strict";
$(document).ready(function(){

    $(".img").click(function() {
        const images = ['../img/gif/car.gif', '../img/gif/horrore.gif', '../img/gif/phone.gif', '../img/gif/tenor.gif'];

        let active = images[0];

        $("body").append("<div class='modal'>"+
        "<img id='mainSrc' src='"+active+"'class='modal__content'/>"+
        "<div class='modal__close'>"+"&times;"+"</div>"+
        "<div id='right' class='modal__right'></div>"+
        "<div id='left' class='modal__left'></div>");

        $('#right').click(function(){
            $('#mainSrc').attr('src', 'active');
        });

        $('#left').click(function(){
            $('#mainSrc').attr('src', );
        });
        
        $(".modal").fadeIn(800);

        $(".modal__close").click(function(){
            $(".modal").fadeOut(800);

        setTimeout(function() {
            $(".modal").remove();
            }, 800);
        });
    });
});