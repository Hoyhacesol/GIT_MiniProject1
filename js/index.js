$(document).ready(function () {
    // 체크카드 슬라이드
    $('.center').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: $('.slick_prev_btn'),
        nextArrow: $('.slick_next_btn'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    prevArrow: $('.slick_prev_btn'),
                    nextArrow: $('.slick_next_btn'),
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    prevArrow: $('.slick_prev_btn'),
                    nextArrow: $('.slick_next_btn'),
                }
            }
        ]
    });


    // 스크롤 시 예금 적금 이미지 오른쪽에서 나오는 애니메이션
    const target1 = document.querySelector(".deposit_cont .img_box");
    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__fadeInRight");
            } 
        });
    }, { threshold: 0.5 }); // target의 높이의 50%가 보이면
    observer1.observe(target1);

    // 스크롤 시 해외송금 이미지 아래에서 위로 나오는 애니메이션
    const target2 = document.querySelector(".abroad_cont .img_box");
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__fadeInUp");
            } 
        });
    }, { threshold: 0.5 });
    observer2.observe(target2);

    // 스크롤 시 대출 컨텐츠 밤으로 바뀌는 애니메이션
    const target3 = document.querySelector("#content .loan_cont");
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("night");
            } 
        });
    }, { threshold: 0.5 });
    observer3.observe(target3);
});