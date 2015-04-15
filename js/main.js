var $navBtn = $('.nav-btn');
var $panel = $('.panel');
var $reverseBtn = $('.reverse-btn');
var $playBtn2 = $('.play-btn2');
var $fastForwardbtn = $('.fast-forward-btn');

var $footer = $(".footer");
var $banner = $(".banner");
var $iconLink = $('.icon-link');

$iconLink.waypoint(function () {
    console.log('here');
    $iconLink.toggleClass('js-active');
},{offset: '60%' });

$panel.localScroll();

$footer.localScroll();

$banner.localScroll();

$navBtn.on('click', function () {
    $panel.toggleClass('js-panel-open');
});

$reverseBtn.on('click', function () {
    $reverseBtn.toggleClass('bounce');
});

$playBtn2.on('click', function () {
    $playBtn2.toggleClass('flip');
    });

$fastForwardbtn.on('click', function () {
    $fastForwardbtn.toggleClass('move');
    });