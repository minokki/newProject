// // 햄버거 버튼 토글시 목록 보이기

let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function() {
    navbarToggler.getAttribute("aria-expanded") === "false"
    ? navbarToggler.setAttribute("aria-expanded", "false")
    : navbarToggler.setAttribute("aria-expanded", "true");
});

// 드롭다운 마우스오버 (768픽셀 이하 반응형일때 드롭다운 클릭으로 변경, 수정예정)

const dropdownItems = document.querySelectorAll('.dropdown-toggle');
const dropdowns = Array.from(dropdownItems).map((dropdownItem) => new bootstrap.Dropdown(dropdownItem));

function toggleDropdownClick() {
  if (window.innerWidth < 768) {
    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.setAttribute('data-bs-toggle', 'dropdown');
    });
  } else {
    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.removeAttribute('data-bs-toggle');
    });
  }
}
toggleDropdownClick();
window.addEventListener('resize', toggleDropdownClick);



// 스크롤시 50px 지점에서 네비게이션바 스타일 변경

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY >= 50) {  // 스크롤 거리 값을 필요에 따라 변경하십시오.
      navbar.classList.add('nav-scrolled');
  } else {
      navbar.classList.remove('nav-scrolled');
  }
});