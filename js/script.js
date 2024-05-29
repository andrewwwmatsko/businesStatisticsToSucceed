// accordion
const accordionWrapper = document.querySelectorAll(".faqs-item-title-wrapper");

const body = document.querySelector("body");

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
  body.classList.add("fixed-position");
}

function closeMenuHandler() {
  mobmenu.mobModal.classList.remove("is-active");
  body.classList.remove("fixed-position");
}

// close mob menu when following anchor links

const mobMenuRefs = {
  mobMenuUl: document.querySelector(".mob-menu-list"),
  aboutUsLink: document.querySelector("a[href='#about-us']"),
  howItWorksLink: document.querySelector("a[href='#how-it-works']"),
  pricingLink: document.querySelector("a[href='#pricing']"),
  faqsLink: document.querySelector("a[href='#faqs']"),
};

mobMenuRefs.mobMenuUl.addEventListener("click", closeMenyByAnchorLink);

function closeMenyByAnchorLink(event) {
  if (event.target.classList.contains("mob-menu-link")) {
    closeMenuHandler();
  }
}

// login and sign up form appearance
const authRefs = {
  loginBtnArr: document.querySelectorAll(".btn.login"),
  signUpBtn: document.querySelectorAll(".btn.sign-up"),
  closeAuthWindowBtn: document.querySelector("[data-auth-close]"),
  closeSignupWindowBtn: document.querySelector("[data-signup-close]"),

  loginContainerEl: document.querySelector("[data-login]"),
  signupContainerEl: document.querySelector("[data-signup]"),

  forms: document.querySelectorAll(".login-form"),
};

//showing login / signup modal windows
authRefs.loginBtnArr.forEach((el) => {
  el.addEventListener("click", onClickLoginBtn);
});
authRefs.signUpBtn.forEach((el) => {
  el.addEventListener("click", onClickSignupBtn);
});

//closing login / signup modal windows
authRefs.closeAuthWindowBtn.addEventListener("click", onCloseAuthWindow);
authRefs.closeSignupWindowBtn.addEventListener("click", onCloseSignWindow);

//forms

authRefs.forms.forEach((form) => {
  form.addEventListener("sumbit", (event) => {
    event.preventDefault();
  });
});

function onClickLoginBtn() {
  if (mobmenu.mobModal.classList.contains("is-active")) {
    closeMenuHandler();
  }
  authRefs.loginContainerEl.classList.add("is-active");
  body.classList.add("fixed-position");
}

function onClickSignupBtn() {
  if (mobmenu.mobModal.classList.contains("is-active")) {
    closeMenuHandler();
  }
  authRefs.signupContainerEl.classList.add("is-active");
  body.classList.add("fixed-position");
}

function onCloseAuthWindow() {
  authRefs.loginContainerEl.classList.remove("is-active");
  body.classList.remove("fixed-position");
}
function onCloseSignWindow() {
  authRefs.signupContainerEl.classList.remove("is-active");
  body.classList.remove("fixed-position");
}
