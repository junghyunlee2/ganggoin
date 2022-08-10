$(function () {
  //  isotope
  $("#tab1").waitForImages(function () {
    var $container = $("#tab1 .portfolio_container");


    $("#tab1 .portfolio_filter a").click(function () {
      $("#tab1 .portfolio_filter .active").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine: "jquery",
        },
      });
      return false;
    });
  });

  //  isotope
  $("#tab2").waitForImages(function () {
    var $container = $("#tab2 .portfolio_container");


    $("#tab2 .portfolio_filter a").click(function () {
      $("#tab2 .portfolio_filter .active").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine: "jquery",
        },
      });
      return false;
    });
  });
});