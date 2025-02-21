$(document).ready(function(){
  

// ani

  $(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();
    var targetOffset1 = $("#scroll1 .text-box").offset().top;
    var targetOffset2 = $("#scroll2 .text-box").offset().top;
    var targetOffset3 = $("#scroll3 .text-box").offset().top;
    var targetOffset4 = $("#scroll4 .text-box").offset().top;
    var targetOffset5 = $("#scroll5 .text-box").offset().top;
    

    // 스크롤 시 애니메이션 적용
    if (scrollPosition + $(window).height() > targetOffset1) {
      $("#scroll1 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll1 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset2) {
      $("#scroll2 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll2 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset3) {
      $("#scroll3 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll3 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset4) {
      $("#scroll4 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll4 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset5) {
      $("#scroll5 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll5 .img-box").addClass("animate__animated animate__fadeInUp");
    }

  });

  
  // 비디오가 애니메이션 후에 재생되도록 설정
  $(".img-box").on("animationend", function() {
    var videoElement = $(this).find("video")[0];
    if (videoElement) {
      videoElement.play();  // 애니메이션 끝난 후 비디오 재생
    }
  });
  
  //#scroll2 .img-box가 애니메이션 된 후에 실행
  $("#scroll2 .img-box").on("animationend", function() { 

  // 1dep
  let box = document.getElementById("box");
  let images = document.querySelectorAll("#scroll2 .imgs:nth-of-type(1) img");
    

  setTimeout(() => {
    box.style.backgroundColor = '#D9D9D9';
  },200); // 0.2초 후에 박스 트랜지션

  setTimeout(() => {
    // hide 클래스를 추가하여 서서히 사라지게 만듦
    images.forEach(img => img.classList.add('hide'));
    box.classList.add('hide');  // box에도 hide 클래스를 추가
  }, 1000);  // 1초 후에 사라짐


  // 2dep 
  
  setTimeout(() => {
    const secondDep = document.querySelector("#scroll2 .imgs:nth-of-type(2)");
    secondDep.style.display = "block";  // display 값을 block으로 변경
    
    
  const deptext = document.querySelector("#ani #scroll2 .imgs:nth-of-type(2) .deptext");
  const deptext1 = document.querySelector("#ani #scroll2 .imgs:nth-of-type(2) .deptext1");
  const deptext2 = document.querySelector("#ani #scroll2 .imgs:nth-of-type(2) .deptext2");
  
  let moneytext = document.getElementById("money");
  
  let moneyindex = ["3원","36원","360원","3,600원","36,000원"]
  
  setTimeout(() => {
    deptext.classList.add("hide"); // "보낼 금액"을 사라지게 함
  }, 1000);
  
  // 2. 숫자 변경 애니메이션 (0.5초 간격으로 변경)
  setTimeout(() => {
    let index = 0;
    
    deptext1.style.opacity = "1";  
    
    let interval = setInterval(() => {
      moneytext.textContent = moneyindex[index];
      index++;
      
      if (index >= moneyindex.length) {
        clearInterval(interval); // 마지막 숫자까지 변경되면 멈춤
        setTimeout(() => {
          deptext2.style.opacity = "1"; //  deptext2 나타나게 함
        }, 200); // 멈춘후에 0.2초 후 deptext2 표시
      }
    }, 200); //0.2 초 간격으로 배열 이 나옴
  }, 1500); // 1.5초 후에 배열 시작
  
}, 2000);  // 2 초 후에 display를 "block"으로 변경
  
// 3dep
setTimeout (() => {
  const thirdDep = document.querySelector("#ani #scroll2 .imgs:nth-of-type(3)");
    thirdDep.style.display = "block";  // display 값을 block으로 변경
    
    // 3dep 애니메이션 실행 함수
    
    // svg 애니메이션
    let path = document.querySelector("svg path");
    
    setTimeout(() => {
      path.style.strokeDashoffset = "0";
    }, 1000);  
    
  },5000); //5 초 후에 display를 "block"으로 변경

  });

  // scroll4 img-box
  $("#scroll4 .img-box").on("animationend", function() {
    
    
    let counter = document.getElementById("count");
   
    
    function animateCountUp(start, end, duration) {
      // 이미 9,000,000이면 애니메이션 실행 안 함
      if (counter.innerText === "9,000,000") {
        return;
      }
    
      let increment = (end - start) / duration * 500;  // 증가량 계산
      let current = start;
      let startTime = null;
     
    
      function update(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;  // 경과 시간
    
        if (progress >= duration) {
          current = end;
          counter.innerText = current.toLocaleString();
          
          return;
        }
    
        current = start + increment * (progress / duration);
        counter.innerText = Math.ceil(current).toLocaleString();  // 콤마 추가
    
        requestAnimationFrame(update);  // 다음 프레임 호출
      }
    
      requestAnimationFrame(update);  // 애니메이션 시작
    }
    
    function animateCountDown(start, end, duration) {
      if (counter.innerText === "8,200,000" ) {  // 이미 8,200,000이면 실행 안 함
        return;
      }
    
      let increment = (start - end) / duration;  // 감소량 계산
      let current = start;
      let startTime = null;
    
      function update(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;  // 경과 시간
    
        if (progress >= duration) {
          current = end;
          counter.innerText = current.toLocaleString();
          return;
        }
    
        current = start - increment * (progress / duration * 350);
        counter.innerText = Math.ceil(current).toLocaleString();  // 콤마 추가
    
        requestAnimationFrame(update);  // 다음 프레임 호출
      }
    
      requestAnimationFrame(update);  // 애니메이션 시작
    }
    
    // 실행: 2,000,000 → 9,000,000 (1초 동안)
    animateCountUp(2000000, 9000000, 500);
    
    // 2초 후에 9,000,000 → 8,200,000으로 애니메이션 실행
    setTimeout(() => {
      // 애니메이션이 끝난 후에만 실행
      if (counter.innerText === "9,000,000") {
        animateCountDown(9000000, 8200000, 500); // 0.5초 동안 8,200,000으로 도달
      }
    }, 2000);


        
        $("#ani .container:nth-child(4) .img-box .imgs div:nth-of-type(1)").css({
        "animation": "expandUp 2s ease-in-out forwards"
        });
        $("#ani .container:nth-child(4) .img-box .imgs div:nth-of-type(4)").css({
          "animation": "expandUp 2s ease-in-out forwards"
          });
          $("#ani .container:nth-child(4) .img-box .imgs div:nth-of-type(5)").css({
            "animation": "expandUp2 2s ease-in-out forwards"
            });
});

// modla
// 모달 요소와 버튼
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var btn = document.getElementById("openModal");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");
var btn4 = document.getElementById("openModal4");
var btn5 = document.getElementById("openModal5");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

document.querySelectorAll('#myModal3 a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();  // 기본 동작 방지 (새로고침 안되도록)
  });
});

// 버튼을 클릭하면 모달이 열림
btn.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn2.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal2.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn3.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal3.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn4.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal4.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn5.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal5.style.display = "block";
  document.body.style.overflow = "hidden"
}

// 닫기 버튼을 클릭하면 모달이 닫힘
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"
}

span2.onclick = function() {
  modal2.style.display = "none";
  document.body.style.overflow = "auto"
}

span3.onclick = function() {
  modal3.style.display = "none";
  document.body.style.overflow = "auto"
}

span4.onclick = function() {
  modal4.style.display = "none";
  document.body.style.overflow = "auto"
}

span5.onclick = function() {
  modal5.style.display = "none";
  document.body.style.overflow = "auto"
}

// 모달 외부를 클릭하면 모달이 닫힘
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
    document.body.style.overflow = "auto"
  }
}

$("#modal .btn").on('click',function(event) {
  event.preventDefault();
});


});