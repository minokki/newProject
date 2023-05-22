//  캐러셀이 마우스 오버 시 일시 중지되는 동작을 제어
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  pause: false
});

// 슬랙 슬라이더
$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    centerPadding: '100px', // 좌우 공백 제거
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false, // 화살표를 없애기 위해 false로 변경
    responsive: [
      {
        breakpoint: 998,
        settings: {
          arrows: false, // 반응형 설정에서도 화살표를 없애기 위해 false로 변경
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1 //998px 이하일때 이미지 한개 표시,반응형
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false, // 반응형 설정에서도 화살표를 없애기 위해 false로 변경
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1 //768px 이하일때 이미지 한개 표시 , 반응형
        }
      }
    ]
  });
});


