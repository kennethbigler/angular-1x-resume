// JavaScript Document

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54229318-1', 'auto');
ga('send', 'pageview');

/* This code is to make the side bar not scroll after the initial hiding of the jumbotron
 * Idea from http://jsfiddle.net/HQS8s/
 */
$(document).ready(function() {
    // Cache selectors for faster performance.
    var $window = $(window),
        $rightBar = $('#rightBar'),
        $rightBarAnchor = $('#rightBarAnchor');

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $rightBarAnchor.offset().top - 80;
        if (window_top > div_top) {
            // Make the div sticky.
            $rightBar.addClass('stick');
            $rightBarAnchor.height($rightBar.height());
        }
        else {
            // Unstick the div.
            $rightBar.removeClass('stick');
            $rightBarAnchor.height(0);
        }
    });
});