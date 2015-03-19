var $navBtn = $('.nav-btn');
var $panel = $('.panel');

var $reverseBtn = $('.reverse-btn');


$navBtn.on('click', function () {
    $panel.toggleClass('js-panel-open');
});

var $reverse-btn = $('.reverse-btn');

$reverseBtn.on('click', function () {
    $reverseBtn.toggleClass('bounce');
});