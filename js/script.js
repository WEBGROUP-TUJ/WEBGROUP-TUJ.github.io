

$('.nav-link::after').mousemove(function(){
    $(this).css("display", "none");
});


var h1 = document.querySelector("#print");
var x = h1.innerHTML;
h1.innerHTML = "";
var i = 0;
function write() {
    h1.innerHTML = h1.innerHTML + x[i];
    i++;
    if (i < x.length) {
        setTimeout(write, 100);
    }

}
setTimeout(function () {
    write();
}, 1500);



const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
    // if ($(".mobile-nav").css("display", "block")) {
    //     $(".mobile-nav").css("display", "none");
    // }
    // else{
    //     $(".mobile-nav").css("display", "block");
    // }
    
}


$(function () {
    $('#nav li:has(ul)').doubleTapToGo();
});

var prev = ''

$(document).ready(function () {
    $('.slide3').owlCarousel({        
        autoplay: true,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        center:false,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText:[
           "",""
        ],
        responsive: {
            0: {
                items: 1
            },
        }
    })
    $('.slide2').owlCarousel({        
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center:false,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText:[
           "",""
        ],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            },
        }
    })
    $('.slide1').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center:false,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText:[
           "",""
        ],
        responsive: {

            500: {
                items: 3
            },
            600: {
                items: 3
            },
            700: {
                items: 3
            },
            800: {
                items: 4
            },
            900: {
                items: 5
            },
            1000: {
                items: 5
            },
            1100: {
                items: 6
            }
        }
    })  
});
