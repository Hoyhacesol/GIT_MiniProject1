document.addEventListener('DOMContentLoaded', function () {
  // 헤더의 관련사이트 드롭다운 메뉴 기능
  document.querySelector('#header .dropdown_btn').addEventListener('click', function () {
    let tg = this;
    if (!(tg.classList.contains('active'))) {
      tg.classList.add('active');
      document.querySelector('#header .nav_dropdown').classList.add('on');
    } else {
      tg.classList.remove('active');
      document.querySelector('#header .nav_dropdown').classList.remove('on');
    }
  });

  // 스크롤 시 헤더에 클래스 추가
  const header = document.querySelector("#header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 헤더 관련 사이트 클릭시 나타나는 드롭다운 기능
  const button = document.getElementById("drop_btn");
  const dropdown = document.getElementById("drop_menu");
  const menuItems = document.querySelectorAll(".nav_item .nav_li"); // 모든 li 요소 선택
  let isPopupVisible = false;

  // 버튼 클릭 시 팝업 열기/닫기 토글
  button.addEventListener("click", (event) => {
    isPopupVisible = !isPopupVisible; // 상태 반전
    dropdown.style.opacity = isPopupVisible ? "1" : "0"; // 투명도 변경
    dropdown.style.pointerEvents = isPopupVisible ? "auto" : "none"; // 클릭 가능 여부 변경
    event.stopPropagation(); // 이벤트 전파 방지
  });

  // 문서 클릭 시 팝업 닫기
  document.addEventListener("click", () => {
    if (isPopupVisible) {
      button.classList.remove('active')
      isPopupVisible = false;
      dropdown.style.opacity = "0";
      dropdown.style.pointerEvents = "none";
    }
  });

  // 팝업 내부 클릭 시 닫히지 않도록 설정
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // 모든 li 요소에 마우스가 올라가면 팝업 닫기
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (isPopupVisible) {
        button.classList.remove('active')
        isPopupVisible = false;
        dropdown.style.opacity = "0";
        dropdown.style.pointerEvents = "none";
      }
    });
  });
});