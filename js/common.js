$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо! Мы свяжемся с вами");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).on('load', function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});

// DOM Ready
$(document).ready(function() {

    var $el, leftPos, newWidth;
    var $mainNav = $(".navbar-nav");
    var activeItem = $(".navbar-nav .active")[0] ? $($(".nav-tabs .active")[0]) : null;
    var itemLinks = $(".navbar-nav li a");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    if (activeItem) {
        $magicLine
            .width(activeItem.width())
            .css("left", activeItem.position().left)
            .data("orig-left", activeItem.position().left)
            .data("orig-width", $magicLine.width());
    } else {
        $magicLine.width(0);
    }

    itemLinks.hover(function() {
        $el = $(this);
        leftPos = $el.parent().position().left + 30;
        newWidth = $el.parent().width() - 60;

        if (activeItem == null && $magicLine.position().left === 0) {
            $magicLine.css("left", leftPos + newWidth / 2);
        }

        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("orig-left"),
            width: $magicLine.data("orig-width")
        });
    });
});


$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: false,
        css3: true,
        fitToSection: false
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var tween = new TimelineMax();
    tween.add([
        TweenMax.to("#target", 1, { rotation: 90, ease: Linear.easeNone, transformOrigin: "top right" }),
        TweenMax.to("#target2", 1, { rotation: -90, ease: Linear.easeNone, transformOrigin: "top left" })
    ]);
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger",
            duration: 400
        })
        .setTween(tween)
        // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

});

$('#myModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var personal = button.data('info') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(personal);
})