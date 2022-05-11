var isScrolling;
var prevScrollpos = window.pageYOffset;
let tolerance = 80;
window.addEventListener(
    'scroll',
    function(event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            var currentScrollPos = window.pageYOffset;
            console.log({prevScrollpos,currentScrollPos})
            if (currentScrollPos - prevScrollpos > tolerance) {
                $('.web-page-header').slideUp();
            } 
            if (currentScrollPos - prevScrollpos < -tolerance){
                $('.web-page-header').slideDown();
            }
            prevScrollpos = currentScrollPos;
        }, 50);
    },
    false
);
