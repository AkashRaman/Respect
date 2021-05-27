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
        $(".about-us").addClass("underline");
      } else {
        $(".about-us").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").removeClass("underline");
      }
      if (direction == "up") {
        $(".about-us").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-origin").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".origin").addClass("underline");
      }
      if (direction == "up") {
        $(".origin").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-cause").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".origin").removeClass("underline");
        $(".causes").addClass("underline");
      }
      if (direction == "up") {
        $(".origin").addClass("underline");
        $(".causes").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );
  
  $(".js--message-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-1").addClass("message-ls-hover");
      }
      if (direction == "up") {
        $(".js--message-1").removeClass("message-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--message-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-2").addClass("message-rs-hover");
        $(".js--message-1").removeClass("message-ls-hover");
      }
      if (direction == "up") {
        $(".js--message-2").removeClass("message-rs-hover");
        $(".js--message-1").addClass("message-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--message-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-3").addClass("message-ls-hover");
        $(".js--message-2").removeClass("message-rs-hover");
      }
      if (direction == "up") {
        $(".js--message-3").removeClass("message-ls-hover");
        $(".js--message-2").addClass("message-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--message-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-4").addClass("message-rs-hover");
        $(".js--message-3").removeClass("message-ls-hover");
      }
      if (direction == "up") {
        $(".js--message-4").removeClass("message-rs-hover");
        $(".js--message-3").addClass("message-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--message-5").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-5").addClass("message-ls-hover");
        $(".js--message-4").removeClass("message-rs-hover");
      }
      if (direction == "up") {
        $(".js--message-5").removeClass("message-ls-hover");
        $(".js--message-4").addClass("message-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--message-6").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-6").addClass("message-rs-hover");
        $(".js--message-5").removeClass("message-ls-hover");
      }
      if (direction == "up") {
        $(".js--message-6").removeClass("message-rs-hover");
        $(".js--message-5").addClass("message-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--message-7").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--message-7").addClass("message-ls-hover");
        $(".js--message-6").removeClass("message-rs-hover");
      }
      if (direction == "up") {
        $(".js--message-7").removeClass("message-ls-hover");
        $(".js--message-6").addClass("message-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--section-effect").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".causes").removeClass("underline");
        $(".effect").addClass("underline");
      }
      if (direction == "up") {
        $(".causes").addClass("underline");
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
