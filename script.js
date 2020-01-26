jQuery(function () {

  jQuery(".essense").click(
    function() {
      if (jQuery(this).parent().find(".hide").css("display") == "none"){
      jQuery(this).parent().find(".hide").slideDown();
      jQuery(this).find(".down").hide();
      jQuery(this).find(".up").show();

      }
      else{
        jQuery(this).parent().find(".hide").slideUp();
        jQuery(this).find(".up").hide();
        jQuery(this).find(".down").show();
      }
    }
  );

  jQuery(".role li").click(
    function() {
      console.log("True")
      if (jQuery(this).parent().find(".res").css("display") == "none"){
      jQuery(this).parent().find(".res").slideDown();
      jQuery(this).find(".down").hide();
      jQuery(this).find(".up").show();

      }
      else{
        jQuery(this).parent().find(".res").slideUp();
        jQuery(this).find(".up").hide();
        jQuery(this).find(".down").show();
      }
    }
  );

  jQuery(window).on('scroll',function () {

    var sc = jQuery('.top-catch').offset().top;
    var sct = jQuery(window).scrollTop();
    var hei = jQuery(window).height();

    if (sc + sct > hei){
      jQuery('.scroll-top').fadeIn();
    } else {
      jQuery('.scroll-top').fadeOut();
    }
  })

  jQuery(".scroll-top").click(
    function() {
      jQuery('html, body').animate({scrollTop:0});
    }
  );


  
});