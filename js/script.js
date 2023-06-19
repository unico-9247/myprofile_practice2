$(function() {

  // メイン写真の写真のスクロール
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });

  // マウスがナビゲーションのリンクボタン上にあるとき不透明度をアニメーションで変更
  $('.nav').on('mouseover', function() {
    $(this).animate({opacity: 0.6}, 100);
  });

  // マウスがナビゲーションのリンクボタンから離れたときに不透明度を１に戻す
  $('.nav').on('mouseout', function() {
    $(this).animate({opacity: 1.0}, 100);
  });

  // 画面のスクロール量が100px以上であれば、TOPボタンを表示させる
  $(window).scroll( function() {
    const value = $(this).scrollTop();
    if (value >= 100) {
      $('#back-btn').css('display', 'inline');
    } else {
      $('#back-btn').css('display', 'none');
    }
  });

// （未）ページ内リンクのスクロールをなめらかにする

// （未）スクロールした時にセクションをフェードインさせる

// （エラー中）Worksの画像をクリックしたときにモーダルで拡大表示する
// 定数に要素を入れる
const open = $('.modal-open'); 
const close = $('.modal-close');
const container = $('.modal-container');

// 開くボタンをクリックしたらモーダルを表示する
open.on('click', function() {
  container.addClass('active');
  return false;
});

// 閉じるボタンをクリックしたらモーダルを閉じる
close.on('click', function() {
  container.removeClass('active');
});

// モーダルの外側をクリックしたらモーダルを閉じる
$(document).on('click', function(e) {
  if(!$(e.target).closest('modal-body').length) {
    container.removeClass('active');
  }
});

});