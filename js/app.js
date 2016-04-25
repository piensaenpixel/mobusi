
$(document).ready(function () {

    $(".navigation-dropdownItemLink" ).click(function() {
      $(this).toggleClass( "is-open" );
      $('.navigation-dropdownItemText').toggleClass( "is-hide" );
    });

    $(".navigation-languageLink" ).click(function() {
      $('.navigation-language').toggleClass( "is-open" );
    });


    $(document).on("scroll", onScroll);
    $('.jobs-carousel').slick({
        dots: true,
        arrows: false
    });
    $('.section-integrated-carousel').slick({
        dots: true,
        arrows: false
    });

    
    $(window).scroll(function(){
        var scrollPosition = $(document).scrollTop();
        var h = window.innerHeight;
        if(scrollPosition>h) {
            $('#header').addClass("is-down");
        } else {
            $('#header').removeClass("is-down");
        }
    })

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('is-active');
        })
        $(this).addClass('is-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });



});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.navigation-item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation-item a').removeClass("is-active");
            currLink.addClass("is-active");
        }
        else{
            currLink.removeClass("is-active");
        }
    });
}