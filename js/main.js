var $navBtn = $('.nav-btn');
var $panel = $('.panel');

$navBtn.on('click', function () {
    $panel.toggleClass('js-panel-open');

});
