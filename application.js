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
        $(".invader-laser.launched").each(function() {
            $laser = $(this);
            $laser.css({ left: "-=6" });
            var $lastChar = $(".brand > *:visible").last();
            if ($lastChar.length > 0 && $laser.position().left < $lastChar.position().left + $lastChar.width()) {
                $laser.remove();
                $lastChar.hide();
                if ($(".brand > *:visible").length == 0) {
                    $(".brand > *:hidden").show();
                }
            }
        });
    }, 20);

    $invaderCanon.click(function(event) {
        $(".invader-laser:not(.launched)").clone().addClass("launched").appendTo($("#navbar")).css({ left: $invaderCanon.position().left });
    });

    setInterval(function() {
        $invaderCanon.click();
        setTimeout(function() {
            $(".brand > *:hidden").first().show();
        }, Math.random() * 7000);
    }, 3000);
});
