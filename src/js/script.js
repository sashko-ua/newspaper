// І з нову привіт мій таємний читачу. 
// В завданні написано зробити невеличку галерею не використовуючи сторонні плагіни,
// але я, на жаль, завжди брав готові рішення. 
// Я лише нещодавно сів за вивчкння JS. 
// Тому погугливши трішки (10-12 годин) зміг видавити зі своєї голови лише ось ЦЕ...
// Мені здається, що я не розумію лише якоїсь маленької деталі, яка не дає можливості користуватися данними з масиву,
// та підставляти їх в SRC.
// Якщо є можливість дати хоча б якийсь фідбек, то ось номер телефону +3806835518885.
// Дякую за увангу=)

"use strict";
$(document).ready(function(){

    const images = ['../img/gif/car.gif', '../img/gif/horrore.gif', '../img/gif/phone.gif', '../img/gif/tenor.gif'];

    let active = images[0];

    $(".img").click(function() {
        $("body").append("<div class='modal'>"+
        "<img id='mainSrc' src='"+active+"'class='modal__content'/>"+
        "<div class='modal__close'>"+"&times;"+"</div>"+
        "<div id='right' class='modal__right'></div>"+
        "<div id='left' class='modal__left'></div>");

        $('#right').click(function(){
            $('#mainSrc').attr('src', active = images[2]);
        });

        $('#left').click(function(){
            $('#mainSrc').attr('src', active = images[0]);
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