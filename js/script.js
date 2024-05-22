// accordion
const accordionWrapper = document.querySelectorAll(".faqs-item-title-wrapper");

for (let i = 0; i < accordionWrapper.length; i++) {
  accordionWrapper[i].addEventListener("click", (e) => {
    const content = e.currentTarget.nextElementSibling;

    const btn = e.currentTarget.querySelector(".show-more-btn");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("is-active");
      btn.classList.remove("is-active");
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.classList.add("is-active");
      btn.classList.add("is-active");
    }
  });
}
