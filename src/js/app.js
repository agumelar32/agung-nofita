/** @format */

// get url parameter
const urlParams = new URLSearchParams(window.location.search);
const nama_tamu = urlParams.get("kepada");
const span_tamu = document.querySelector(".nama_url");
const creat_meta = document.createElement("meta");
creat_meta.name = "description";
creat_meta.content = `Kepada yang Terhormat ${nama_tamu}`;
document.getElementsByTagName("head")[0].appendChild(creat_meta);

span_tamu.textContent = nama_tamu;
// get url parameter end

// home animation
const btn_open = document.querySelector(".tombol");
let tl = gsap.timeline();

btn_open.addEventListener("click", () => {
  const cover = document.querySelector("#cover");
  const main = document.getElementById("home");
  const stagger = document.querySelectorAll(".stagger_animation");
  cover.classList.add("active");
  main.classList.add("show");
  stagger.forEach((e) => {
    e.classList.add("active");
  });
  gsap.to(".active", {
    duration: 0.5,
    stagger: 0.3,
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  });
  const audio = new Audio("/assets/music/music.mp3");
  audio.play();
});
// home animation end

const bottomNav = document.getElementById("bottomNav");

document.querySelector(".buka_undangan").addEventListener("click", () => {
  const cover = document.getElementById("cover");
  const main = document.getElementById("mainContent");

  gsap.to(cover, {
    duration: 1,
    opacity: 0,
    onComplete: () => {
      cover.style.display = "none";
      main.style.display = "block";
      gsap.from(main, { duration: 1, opacity: 0, y: 50 });
      bottomNav.style.display = "flex"; // Tampilkan menu setelah buka undangan
    },
  });
});

// Smooth scroll dan highlight active
document.querySelectorAll("#bottomNav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const sections = document.querySelectorAll(
  "#cover, #coupleSection, #weddingEvent, #gallerySection, #wishesSection"
);
const navLinks = document.querySelectorAll("#bottomNav ul li a");

window.addEventListener("load", () => {
  new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  });
});

// cowndown timer
let countDownDate = new Date("Jul 22, 2023 18:00:00").getTime();
const hari = document.querySelector(".hari");
const jam = document.querySelector(".jam");
const menit = document.querySelector(".menit");
const detik = document.querySelector(".detik");

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hari.innerHTML = days;
  jam.innerHTML = hours;
  menit.innerHTML = minutes;
  detik.innerHTML = seconds;
}, 1000);
// cowndount timer end

// Inisialisasi gallery swiper satu foto per tampilan
const gallerySwiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1, // hanya satu foto tampil
  spaceBetween: 0,
  loop: true,
  effect: "slide", // bisa diganti "fade" untuk efek halus
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//music
const music = document.getElementById("bgMusic");
document.querySelector(".buka_undangan").addEventListener("click", () => {
  music.play();
});
