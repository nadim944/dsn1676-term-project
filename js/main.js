var $navBtn = $('.nav-btn');
var $panel = $('.panel');
var $reverseBtn = $('.reverse-btn');
var $playBtn2 = $('play-btn2')

$navBtn.on('click', function () {
    $panel.toggleClass('js-panel-open');
});

$reverseBtn.on('click', function () {
    $reverseBtn.toggleClass('bounce');
});

$playBtn2

$('.box img').on('click', function() {
    $(this).toggleClass('clicked');
});