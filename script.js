// Form validation

const form = document.querySelector("form");
const form_container = document.querySelector(".form-container");
const form_bg = document.querySelector(".form-bg");
const contact_now_btn = document.querySelector(".contact-now-btn");
const form_validation_button = document.querySelector(".contact-btn");
const inputs = document.querySelectorAll(".contact-input");

form_bg.addEventListener("click", closeForm);
contact_now_btn.addEventListener("click", openForm);

function closeForm() {
  form_container.classList.remove("visible");
  form_bg.classList.remove("visible");
  document.body.style.overflow = "visible";
  document.body.style.overflowX = "hidden";
}

function openForm() {
  form_container.classList.toggle("visible");
  form_bg.classList.toggle("visible");
  document.body.style.overflow = "hidden";
}

form_validation_button.addEventListener("click", contactForm);

function contactForm(event) {
  event.preventDefault();
  inputs.forEach(input => {
    if (form.checkValidity()) {
      input.classList.remove("error");
      closeForm();
      console.log(input.id + ": " + input.value);
    } else {
      form.parentElement.style.border = "2px solid red";
      input.classList.add("error");
      console.log("Form is not valid");
      return;
    }
  });
}

// Email validation

const email_address = document.querySelector(".email");
const validation_button = email_address.nextElementSibling;

validation_button.addEventListener("click", emailValidation);

function emailValidation(event) {
  event.preventDefault();
  const email = email_address.value;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (pattern.test(email)) {
    console.log("Valid email address");
    console.log(email_address.value);
  } else {
    console.log("Invalid email address");
  }
}

// Side navigation bar
const side_nav = document.querySelector(".side-nav");
const side_nav_btn = document.querySelector(".nav-btn");
const close_nav_btn = document.querySelector(".close-nav");
const links = document.querySelectorAll(".side-nav-content li a");

side_nav_btn.addEventListener("click", toggleNav);
close_nav_btn.addEventListener("click", toggleNav);
links.forEach(link => link.addEventListener("click", toggleNav));
document.body.addEventListener("click", event => {
  const target = event.target;
  if (
    target !== side_nav_btn &&
    target !== side_nav_btn.firstElementChild &&
    target !== close_nav_btn &&
    target !== side_nav
  ) {
    hideNav()
    return;
  }
});

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 992 && !form_container.classList.contains("visible")) {
      hideNav()
    }
  },
  true
);

function toggleNav(event) {
  const target = event.target;
  console.log(target);
  if (side_nav.classList.contains("side-nav-active")) {
    hideNav()
    return;
  }

  setTimeout(() => {
    side_nav.classList.toggle("side-nav-active");
    document.body.style.overflow = "hidden";
  }, 10);
  side_nav.style.display = "block";
}

function hideNav() {
  setTimeout(() => {
    side_nav.style.display = "none";
  }, 300);

  side_nav.classList.remove("side-nav-active");
  document.body.style.overflow = "visible";
  document.body.style.overflowX = "hidden";
}

// Embed YouTube video
const yt_btn = document.querySelector(".yt-btn");

yt_btn.addEventListener("click", () => {
  yt_btn.nextElementSibling.style.display = "none";
  onYouTubeIframeAPIReady();
});

function onYouTubeIframeAPIReady() {
  let player;

  player = new YT.Player("yt-btn", {
    videoId: "VCPGMjCW0is",
    width: 640,
    height: 360,
    playerVars: {
      autoplay: 1,
      controls: 0 // Show controls (set to 0 to hide)
    },
    events: {
      onReady: () => player.clearVideo()
    }
  });
}

// Initialize AOS
AOS.init();

// Swiper
const swiperOptions = {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false
};

const swiper = new Swiper(".swiper-container", swiperOptions);

const review_swiper = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};

const swiper2 = new Swiper(".mySwiper", review_swiper);
