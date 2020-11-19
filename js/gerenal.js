var _nav = $('.nav');
var _hambuger = $('.hamburger');
var _navbar = $('.navbar-collapse');
var _mark = $('.mark-layout');
var _totop = $('.to-top');

$(window).on('scroll load resize', function() {
    let _windowW = $(window).innerWidth();

    if (window.pageYOffset > 0) {

        _nav.addClass('active');
    } else {
        _hambuger.hasClass('active') ? null : _nav.removeClass('active');
        // _nav.removeClass('active');
    }
    if (_windowW > 768) {
        _remove();
    }
});


_hambuger.on('click', function() {
    // let _check = window.pageYOffset;
    // _check > 0 ? _check = 0 : _check = 1;
    $(this).hasClass('active') ? _remove() : _add();
});

$('.mark-layout').on('click', function() {
    _hambuger.hasClass('active') ? _hambuger.click() : null;
});

function _add() {

    let _check = window.pageYOffset;
    _check > 0 ? _check = 0 : _check = 1;
    _hambuger.addClass('active');
    _navbar.addClass('active');
    _mark.addClass('active');
    _check == 1 ? _nav.addClass('active') : null;
}

function _remove() {

    let _check = window.pageYOffset;
    _check > 0 ? _check = 0 : _check = 1;
    _hambuger.removeClass('active');
    _navbar.removeClass('active');
    _mark.removeClass('active');
    _check == 1 ? _nav.removeClass('active') : null;
}

_totop.click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: 0,
        },
        1000,
        "swing"
    );
});

var _timeout;

function _delay(fn, timed) {
    clearTimeout(_timeout);
    return _timeout = setTimeout(fn, timed);
}