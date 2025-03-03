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

// スクロールでヘッダーの色を変更
// $(window).scroll(function () {
//     if ($('.mv').height() < $(window).scrollTop()) {
//         $('.js-header').addClass('change-color');
//     } else {
//         $('.js-header').removeClass('change-color');
//     }
// });

$(window).scroll(function () {
    // `.mv` と `.sub-mv` のどちらかが存在する場合、その高さを取得
    let targetHeight = Math.max($('.mv').height() || 0, $('.sub-mv').height() || 0);

    if (targetHeight < $(window).scrollTop()) {
        $('.js-header').addClass('change-color');
    } else {
        $('.js-header').removeClass('change-color');
    }
});
// XHRリクエスト
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         } else {
//             console.error('リクエストにエラーが発生しました');
//         }
//     }
// };
// xhr.open('GET', 'https://example.com/data', true);
// xhr.send();
