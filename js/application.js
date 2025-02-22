$(function() {
  var gmail = eval($("#gmail").html());
  $("#gmail").html('<a href="mailto:' + gmail + '">' + gmail + '</a>');

  $(".links img").hover(function() {
    position = $(this).position();
    $("<div class='tooltip'>" + $(this).parent().data("tooltip") + "</div>").appendTo($("body")).css({ top: position.top + $(this).height(), left: position.left + $(this).width() / 2 });
  }, function() {
    $(".tooltip").remove();
  });

  $("iframe[data-lazy]").each(function() {
    var $iframe = $(this);
    var $placeholder = $("<div>Loading...</div>").width($iframe.width()).height($iframe.height());
    $iframe.replaceWith($placeholder);
    var count = 0;
    var countup = function() {
      if (count++ > 5) {
        $placeholder.replaceWith($iframe);
      } else {
        $placeholder.text($placeholder.text() + ".");
        setTimeout(countup, 400);
      }
    };
    countup();
  });

  var originalBrand = $(".brand")[0].outerHTML;

  var laserFireable = true;
  $(document).on("start.tlt", ".brand", function() { laserFireable = false; });
  $(document).on("end.tlt", ".brand", function() { laserFireable = true; });
  $(window).blur(function() { laserFireable = false; });
  $(window).focus(function() { laserFireable = true; });

  $(".brand").textillate();

  var $invaderCanon = $(".invader-canon");
  setInterval(function() {
    $(".invader-laser").each(function() {
      $laser = $(this);
      $laser.css({ left: "-=2" });
      var $lastChar = $(".brand [class^='char']:visible").last();
      var lastCharPosition = $lastChar.position();
      if ($lastChar.length > 0 && $laser.position().left < lastCharPosition.left + $lastChar.width()) {
        $laser.remove();
        $lastChar.hide();
        if ($(".brand [class^='char']:visible").length == 0) {
          $(".invader-laser").remove();
          $(".brand").replaceWith($(originalBrand).textillate());
        }
      } else if ($laser.position().left < 0) {
        $laser.remove();
      }
    });
  }, 5);

  $invaderCanon.click(function(event) { if (laserFireable && $(".invader-laser").length < 15) { $("<div class='invader-laser'></div>").appendTo($("#navbar")).css({ left: $invaderCanon.position().left }); } });

  setTimeout(function() {
    (fireLaser = function() { $invaderCanon.click(); setTimeout(fireLaser, Math.random() * 3000); })();
    (recoverBrandChar = function() { $(".brand [class^='char']:hidden").first().show(); setTimeout(recoverBrandChar, Math.random() * 4000); })();
  }, 1000);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48457330-1', 'hottestseason.com');
  ga('send', 'pageview');
});
