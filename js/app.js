
$(document).ready(function () {

    $('.Hamburguer').on('click', function (e) {
        $(this).toggleClass( "is-active" );
        $('.hdrMobile').toggleClass( "is-active" );
        $('body').toggleClass( "noscroll" );
        var scrollPosition = $(document).scrollTop();
        var h = window.innerHeight;
        if(scrollPosition>h) {
            $('.Hambuguer-inner').toggleClass( "is-scroll" );
        }
        e.preventDefault();
    });






    $(".js-language" ).click(function() {
      $('.hdrMobile').toggleClass( "is-language" );
    });

    $(".hdrMobile-languageHamburguer" ).click(function() {
      $('.hdrMobile').toggleClass( "is-language" );
    });

    $(".js-login" ).click(function() {
      $('.hdrMobile').toggleClass( "is-contact" );
    });
    
    $(".hdrMobile-contactHamburguer" ).click(function() {
      $('.hdrMobile').toggleClass( "is-contact" );
    });


    $(".navigation-dropdownItemLink" ).click(function() {
      $(this).toggleClass( "is-open" );
      $('.navigation-dropdownItemText').toggleClass( "is-hide" );
    });

    $(".navigation-languageLink" ).click(function() {
      $('.navigation-language').toggleClass( "is-open" );
    });


    $('#header-mobile .navigation-itemLink').on('click', function (e) {
        $('.hdrMobile').toggleClass( "is-active" );
        $('body').toggleClass( "noscroll" );
        $('#header-mobile .Hamburguer').toggleClass( "is-active" );
        e.preventDefault();
    });

    var aChildren = $(".u-hideMobile .navigation-item").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values


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
            $('.Hambuguer-inner').addClass("is-scroll");
        } else {
            $('#header').removeClass("is-down");
            $('.Hambuguer-inner').removeClass("is-scroll");
        };

        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("is-active");
            } else {
                $("a[href='" + theID + "']").removeClass("is-active");
            }
        }



    })

    //smoothscroll
    $('.navigation-item a[href^="#"]').on('click', function (e) {
        $(document).off("scroll");
        $('.navigation-item a').each(function () {
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
        e.preventDefault();
    });


});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
}
