"use strict";

$(document).ready(() => {

    $("#form").css("display","none");

    $(".circles").on("click", function(){
        $(this).addClass("tracker");
        $("#form").css("display","block");
        $("#form").fadeIn(150);
        $("#form").attr("style", "display: flex");
        $("#form").show();      
    });
    $("#remove").on("click", function() {
        $(".tracker").toggleClass("tracker");
        $("#form").css("display", "none")
    });
    $("#btn").click(function(){
        // let name = $("#name").val();
        // let partySize = $("#party").val();
        // // $("#name").attr("value", "");
        $(".tracker").toggleClass("reserved available tracker");
        $("#form").css("display", "none");
        $("#form").fadeOut(150);
        });
    $(document).on("mouseenter", ".reserved" , function() {
        let name = $("#name").val();
        let partySize = $("#party").val();
        $(`<p> Name: ${name}</p> <p> Party Size: ${partySize}</p>`).appendTo(".reserved > .reservation");
    });
    $(document).on("mouseleave", ".reserved", function() {
        $(".reservation").hide();
        $("#form").fadeOut(150);
      });
});


//when the user inputs their information, circle is reserved  get input value of name and party number entered 
//populate/put the value of their information into a form 
//when moused over the form with the value of their information is displayed/shown
//when moused off the form is hidden
//should look good in mobile
