// myscripts.js for homepage
/*global $*/
/* This code is to make the side bar not scroll after the initial hiding of the jumbotron
 * Idea from http://jsfiddle.net/HQS8s/ */
function leftBar() {
    "use strict";
    if ($('#leftBar').is(':visible')) {
        // Cache selectors for faster performance.
        var $window = $(window),
            $leftBar = $('#leftBar'),
            $leftBarAnchor = $('#leftBarAnchor');

        // Run this on scroll events.
        $window.scroll(function () {
            var window_top = $window.scrollTop(),
                div_top = $leftBarAnchor.offset().top - 80;
            if (window_top > div_top) {
                // Make the div sticky.
                $leftBar.addClass('stick');
                $leftBarAnchor.height($leftBar.height());
            } else {
                // Unstick the div.
                $leftBar.removeClass('stick');
                $leftBarAnchor.height(0);
            }
        });
    } else {
        setTimeout(leftBar, 50); //wait 50 ms, then try again
    }
}

$(document).ready(function () {
    "use strict";
    //leftBar();
});

// Code for Google Analytics Tracking
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54229318-1', 'auto');
ga('send', 'pageview');
//$window.ga('send', 'pageview', { page: $location.url() }); ga('send', 'pageview', { page: $location.url() });