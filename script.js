console.log('j load');
// console.log($('h1'));

jQuery(document).ready(function ($) {

    $(".scroll").click(function (event) {

        event.preventDefault();

        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);

    });

});

$(function () { // 보이기 | 숨기기 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
            // $('#toTop').fadeIn();
            // $('#toTop').css('left', $('#sidebar').offset());
        } else {
            // $('#toTop').fadeOut();
        }
    }); // 버튼 클릭시 
    $("#toTop").click(function () {
        // $('html, body').animate({
        //     scrollTop: 0 // 0 까지 animation 이동합니다. 
        // }, 400); // 속도 400 
        // return false;
    });
});

var lastScrollTop = 0, delta = 15;

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop() /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
    // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
    // if (Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
    //     return; // ~ 리턴

    if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
        /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
        $(".scroll_01").css("top", "-100px");
    } else {
        $(".scroll_01").css("top", "0px");
    }
    lastScrollTop = scrollTop;
});