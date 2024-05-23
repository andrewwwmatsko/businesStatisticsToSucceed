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

//mob menu

const mobmenu = {
  closeMenuBtn: document.querySelector("[data-menu-close]"),
  openMenuBtn: document.querySelector("[data-menu-open]"),
  mobModal: document.querySelector("[data-menu]"),
};

mobmenu.openMenuBtn.addEventListener("click", openMenuHandler);
mobmenu.closeMenuBtn.addEventListener("click", closeMenuHandler);

function openMenuHandler() {
  mobmenu.mobModal.classList.add("is-active");
}

function closeMenuHandler() {
  mobmenu.mobModal.classList.remove("is-active");
}
