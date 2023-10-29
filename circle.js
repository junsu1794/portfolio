$(() => {
    const len = document.querySelector('svg circle').getTotalLength();
    console.log(len);
}); //jQuery



$(function () {
    const progressWrap = $('.chart');
    const animaionOST = $('.charts').offset().top - 600;
    $(window).on('scroll', function () {
        //윈도우의 스크롤 탑값이 animaionOST값보다 크거나 같고 isAni의 값이 false 면 조건문 실행 => 윈도우의 스크롤바가 스킬바섹션 안으로 진입했고 애니메이션은 미실행 상태
        if ($(window).scrollTop() >= animaionOST) {
            if(!$('.charts').hasClass('active')){
                animationChart();
                $('.charts').addClass('active');
            }
        }
    });
    function animationChart() {
        progressWrap.each(function () {
            const item = $(this);
            const title = item.find('h2');
            const targetNum = title.attr('data-num');
            const circle = item.find('circle');
            $({ rate: 0 }).animate(
                { rate: targetNum },
                {
                    duration: 1500,
                    progress: function () {
                        let now = this.rate;
                        let amount = 630 - (630 * now) / 100;
                        title.text(Math.floor(now));
                        circle.css({strokeDashoffset:amount})
                    },
                }
            )
        });
    }
}); // jQuery