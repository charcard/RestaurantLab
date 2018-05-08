"use strict";

$(document).ready(() => {

    $("#form").css("display","none");

    $(".circles").on("click", function(){
        $("#form").css("display","block");
    });
    $("button").on("click", function() {
        $("#btn").css("display", "none")
});

    $(".circles").click(function(){
        $(this).toggleClass("reserved available");
});



});
