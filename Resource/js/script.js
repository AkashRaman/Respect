$(document).ready(function () {
  $("#section-cover").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-discover").hover(
    function () {
      if ($(window).width() <= "768") {
        $(this).addClass("shadow-pulse");
      } else {
        $(this).addClass("shadow-pulse");
      }
    },

    function () {
      $(this).removeClass("shadow-pulse");
    }
  );

  $(".js--section-synopsis").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".polite").addClass("underline");
      } else {
        $(".polite").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".polite").removeClass("underline");
      }
      if (direction == "up") {
        $(".polite").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-listen").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".listen").addClass("underline");
      }
      if (direction == "up") {
        $(".listen").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-cause").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".listen").removeClass("underline");
        $(".letgo").addClass("underline");
      }
      if (direction == "up") {
        $(".listen").addClass("underline");
        $(".letgo").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-effect").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".letgo").removeClass("underline");
        $(".effect").addClass("underline");
      }
      if (direction == "up") {
        $(".letgo").addClass("underline");
        $(".effect").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-solution").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".effect").removeClass("underline");
        $(".solution").addClass("underline");
      }
      if (direction == "up") {
        $(".effect").addClass("underline");
        $(".solution").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--solution-support-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--solution-support-1").addClass("solution-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--solution-support-1").removeClass("solution-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--solution-support-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--solution-support-2").addClass("solution-support-ls-hover");
        $(".js--solution-support-1").removeClass("solution-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--solution-support-2").removeClass("solution-support-ls-hover");
        $(".js--solution-support-1").addClass("solution-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--solution-support-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--solution-support-3").addClass("solution-support-rs-hover");
        $(".js--solution-support-2").removeClass("solution-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--solution-support-3").removeClass("solution-support-rs-hover");
        $(".js--solution-support-2").addClass("solution-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--solution-support-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--solution-support-4").addClass("solution-support-ls-hover");
        $(".js--solution-support-3").removeClass("solution-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--solution-support-4").removeClass("solution-support-ls-hover");
        $(".js--solution-support-3").addClass("solution-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--solution-support-5").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--solution-support-5").addClass("solution-support-rs-hover");
        $(".js--solution-support-4").removeClass("solution-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--solution-support-5").removeClass("solution-support-rs-hover");
        $(".js--solution-support-4").addClass("solution-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--solution-conclusion").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--solution-conclusion").addClass("solution-conclusion-hover");
        $(".js--solution-support-5").removeClass("solution-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--solution-conclusion").removeClass("solution-conclusion-hover");
        $(".js--solution-support-5").addClass("solution-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */

  $(".mobile-nav-icon").click(function () {
    var nav = $(".nav-section");
    var icon = $(".mobile-nav-icon i");
    var isActive = nav.is(":visible");
    nav.slideToggle(200);

    if (isActive == false) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});
