window.addEventListener("load", () => {
  // 초기 섹션을 활성화합니다. 보통 첫 번째 섹션을 활성화합니다.
  const initialSection = document.querySelector(".section");
  initialSection.classList.add("active");
});
let currentSectionIndex = 0;

function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const newSectionIndex = Math.floor(scrollTop / window.innerHeight);

  if (newSectionIndex !== currentSectionIndex) {
    const prevSection = document.querySelector(".section.active");
    const newSection = document.querySelectorAll(".section")[newSectionIndex];

    prevSection.classList.remove("active");
    newSection.classList.add("active");

    currentSectionIndex = newSectionIndex;
  }
}

window.addEventListener("scroll", handleScroll);
