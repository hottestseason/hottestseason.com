$(function() {
  var gmail = ['hottestseason', '@', 'gmail.com'].join('');
  $("#gmail").html('<a href="mailto:' + gmail + '">' + gmail + '</a>');

  var originalBrand = $(".brand").clone();
  var laserFireable = true;

  $(document).on("start.tlt", ".brand", function() { laserFireable = false; });
  $(document).on("end.tlt", ".brand", function() { laserFireable = true; });

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
          $(".brand").replaceWith(originalBrand.textillate());
        }
      } else if (lastCharPosition && lastCharPosition.left < 0) {
        $laser.remove();
      }
    });
  }, 5);

  $invaderCanon.click(function(event) { if (laserFireable && $(".invader-laser").length < 10) { $("<div class='invader-laser'></div>").appendTo($("#navbar")).css({ left: $invaderCanon.position().left }); } });

  setTimeout(function() {
    (fireLaser = function() { $invaderCanon.click(); setTimeout(fireLaser, Math.random() * 3000); })();
    (recoverBrandChar = function() { $(".brand [class^='char']:hidden").first().show(); setTimeout(recoverBrandChar, Math.random() * 4000); })();
  }, 1000);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48457330-1', 'hottestseason.com');
  ga('send', 'pageview');
});
