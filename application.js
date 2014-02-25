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
    $invaderCanon.click(function() {
        var $invaderLaser = $(".invader-laser").clone().appendTo($("#navbar"));
        var left = $invaderCanon.position().left;
        $invaderLaser.css({ left: left });
        var timer = setInterval(function() {
            left -= 6;
            var $lastChar = $(".brand > *:visible").last();
            if ($lastChar.length > 0 && left < $lastChar.position().left + $lastChar.width()) {
                clearInterval(timer);
                $invaderLaser.remove();
                $lastChar.hide();
                if ($(".brand > *:visible").length == 0) {
                    $(".brand > *:hidden").show();
                }
            } else if (left < 0) {
                clearInterval(timer);
            } else {
                $invaderLaser.css({ left: left });
            }
        }, 25);
    });
});
