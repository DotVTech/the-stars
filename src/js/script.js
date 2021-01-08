/**
 *
 * Toggles mobile menu
 *
 */
const header = document.querySelector('#header');

$('#hamburger-button').click(() => {
    header.classList.toggle('active');
});



/**
 *
 * Closes mobile menu when a link is clicked
 *
 */
$('#header-locals a').click(() => {
    header.classList.remove('active');
});



/**
 *
 * Sets date picker's displayed date to today's date
 *
 */
$('#date-picker')[0].valueAsDate = new Date();



/**
 *
 * Enables smooth scroll on anchor links via
 * jQuery if browser does not support CSS scroll
 * behavior or if browser is Internet Explorer.
 *
 */
const supportsSmoothScroll = CSS.supports('scroll-behavior', 'smooth');
const isIE                   = window.document.documentMode;

if(!supportsSmoothScroll || isIE) {
    const $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });
}
