$(function () {

    $("#toggle").click(function () {
        $(this).toggleClass("on");
        $("#menu").toggleClass("active");
    });

    $(".menu-item").click(function () {
        $("#toggle").toggleClass("on");
        $("#menu").toggleClass("active");
    });

});