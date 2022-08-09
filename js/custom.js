$(function () {
  //  isotope
  $("#tab1").waitForImages(function () {
    var $container = $(".portfolio_container");
    

    $(".portfolio_filter a").click(function () {
      $(".portfolio_filter .active").removeClass("active");
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
    var $container = $(".portfolio_container");
    

    $(".portfolio_filter a").click(function () {
      $(".portfolio_filter .active").removeClass("active");
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
