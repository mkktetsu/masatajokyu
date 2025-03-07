// ハンバーガーメニュー
$(function () {
    $(".js-hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $(".js-drawer").fadeToggle(); 
    });

    $(".js-drawer a").on("click", function () {
        $(".js-hamburger").removeClass("is-active");
        $(".js-drawer").removeClass("is-open");
    });
});

// スライダーの設定
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".js-swiper", {
        loop: true,
        effect: "fade",
        speed: 3000,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// タブの動作
$(function () {
    const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
    
    tabButton.on("click", function () {
        let index = tabButton.index(this);

        tabButton.removeClass("is-active");
        $(this).addClass("is-active");
        tabContent.removeClass("is-active");
        tabContent.eq(index).addClass("is-active");
    });
});

// モーダルウィンドウ
$(function () {
    const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

    open.on("click", function () {
        modal.addClass("is-open");
    });

    close.add(modal).on("click", function () {
        modal.removeClass("is-open");
    });
});



$(window).scroll(function () {
    // `.mv` と `.sub-mv` のどちらかが存在する場合、その高さを取得
    let targetHeight = Math.max($('.mv').height() || 0, $('.sub-mv').height() || 0);

    if (targetHeight < $(window).scrollTop()) {
        $('.js-header').addClass('change-color');
    } else {
        $('.js-header').removeClass('change-color');
    }
});

//sub-mvのヘッダーcolorを変化させるための高さ取得
$(window).scroll(function () {
    // `.sub-mv` があればその高さを使用し、なければ `.mv` の高さを使用する
    let targetHeight = $('.sub-mv').length ? $('.sub-mv').outerHeight() : $('.mv').outerHeight();

    if ($(window).scrollTop() > targetHeight) {
        $('.js-header').addClass('change-color');
    } else {
        $('.js-header').removeClass('change-color');
    }
});

