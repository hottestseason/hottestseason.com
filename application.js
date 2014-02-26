$(function() {
    var gmail = ['hottestseason', '@', 'gmail.com'].join('');
    $("#gmail").html('<a href="mailto:' + gmail + '">' + gmail + '</a>');

    var $invaderCanon = $(".invader-canon");
    var $brand = $(".brand");
    var brandText = $brand.text();
    var newBrand = "";
    for (var i = 0; i < brandText.length; i++) {
        newBrand += "<span>" + brandText.charAt(i) + "</span>";
    }
    $brand.html(newBrand);

    setInterval(function() {
        $(".invader-laser").each(function() {
            $laser = $(this);
            $laser.css({ left: "-=2" });
            var $lastChar = $(".brand > *:visible").last();
            if ($lastChar.length > 0 && $laser.position().left < $lastChar.position().left + $lastChar.width()) {
                $laser.remove();
                $lastChar.hide();
                if ($(".brand > *:visible").length == 0) {
                    $(".brand > *:hidden").show();
                }
            }
        });
    }, 5);

    $invaderCanon.click(function(event) { $("<div class='invader-laser'></div>").appendTo($("#navbar")).css({ left: $invaderCanon.position().left }); });

    (fireLaser = function() { $invaderCanon.click(); setTimeout(fireLaser, Math.random() * 3000); })();
    (recoverBrandChar = function() { $(".brand > *:hidden").first().show(); setTimeout(recoverBrandChar, Math.random() * 4000); })();

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-48457330-1', 'hottestseason.com');
    ga('send', 'pageview');
});
