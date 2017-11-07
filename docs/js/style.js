// Cache selectors outside callback for performance. 
var $window = $(window),
    $stickynav = $('#sticky-nav'),
    stickynavTop = $stickynav.offset().top;

$(window).scroll(function () {
    $stickynav.toggleClass('fixed-top', $window.scrollTop() > stickynavTop);
});