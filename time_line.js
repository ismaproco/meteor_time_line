if (Meteor.isClient) {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 300) {
          $(".navbar").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".navbar").removeClass("active");
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
