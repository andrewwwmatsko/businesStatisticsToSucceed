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
  body: document.querySelector("body"),
};

mobmenu.openMenuBtn.addEventListener("click", openMenuHandler);
mobmenu.closeMenuBtn.addEventListener("click", closeMenuHandler);

function openMenuHandler() {
  mobmenu.mobModal.classList.add("is-active");
  mobmenu.body.classList.add("fixed-position");
}

function closeMenuHandler() {
  mobmenu.mobModal.classList.remove("is-active");
  mobmenu.body.classList.remove("fixed-position");
}

// close mob menu when following anchor links

const mobMenuList = {
  mobMenuUl: document.querySelector(".mob-menu-list"),
  aboutUsLink: document.querySelector("a[href='#about-us']"),
  howItWorksLink: document.querySelector("a[href='#how-it-works']"),
  pricingLink: document.querySelector("a[href='#pricing']"),
  faqsLink: document.querySelector("a[href='#faqs']"),
};

mobMenuList.mobMenuUl.addEventListener("click", closeMenyByAnchorLink);

function closeMenyByAnchorLink(event) {
  if (event.target.classList.contains("mob-menu-link")) {
    closeMenuHandler();
  }
}

// login and sign up form appearance
const authRefs = {
  loginBtn: document.querySelector(".btn.login"),
  signUpBtn: document.querySelector("btn.sign-up"),
  closeAuthWindowBtn: document.querySelector("[data-auth-close]"),

  loginContainerEl: document.querySelector("[data-login]"),
};

authRefs.loginBtn.addEventListener("click", onClickLoginBtn);
authRefs.closeAuthWindowBtn.addEventListener("click", onCloseAuthWindow);

function onClickLoginBtn() {
  authRefs.loginContainerEl.classList.add("is-active");
}

function onCloseAuthWindow() {
  authRefs.loginContainerEl.classList.remove("is-active");
}
