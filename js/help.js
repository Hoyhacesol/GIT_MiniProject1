$(document).ready(function () {


  $(window).scroll(function () {
    var scrollposition = $(window).scrollTop();

    console.log("window.scrollTop : " + $(window).scrollTop());
    console.log("window.height : " + $(window).height());

    if ($(window).scrollTop() == 0) {
      $("#header").css("background-color", "#ffe100");
      $("#header").css("border-bottom", "1px solid rgba(0, 0, 0, 0.186)");
      $("#header .dropdown_btn").css("background", "##F6F0C3");
      $("#header .dropdown_btn").css("border", "1px solid rgba(34, 34, 34, 0.1)");
    } else {
      $("#header").css("background-color", "white");
      $("#header").css("border-bottom", "1px solid rgba(0, 0, 0, 0.1)");
      $(".nav > a").css("color", "black");
      $("#header .dropdown_btn").css("background", "rgba(244, 244, 244, 0.8)");
      $("#header .dropdown_btn").css("border", "1px solid rgba(229, 229, 229, 0.8)");

    }
  });

  $(".nav > a").mouseenter(function () {
    $("#header").css("background-color", "white");
    $("#header").css("border-bottom", "1px solid rgba(0, 0, 0, 0.1)");
    $(".nav > a").css("color", "black");
    $("#header .dropdown_btn").css("background", "rgba(244, 244, 244, 0.8)");
    $("#header .dropdown_btn").css("border", "1px solid rgba(229, 229, 229, 0.8)");
  });
  $(".nav > a").mouseleave(function () {
    $("#header").css("background-color", "#ffe100");
    $("#header").css("border-bottom", "1px solid rgba(0, 0, 0, 0.186)");
    $("#header .dropdown_btn").css("background", "##F6F0C3");
    $("#header .dropdown_btn").css("border", "1px solid rgba(34, 34, 34, 0.1)");
  });
});