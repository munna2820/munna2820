// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  // CounterUp2
const counterUp = window.counterUp.default;

const callback = (entries) => {
    entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            });
            el.classList.add('is-visible');
        }
    });
};

// Use querySelectorAll to select all elements with the class "counter"
const elements = document.querySelectorAll('.counter');

// Create an IntersectionObserver for each "counter" element
elements.forEach((el) => {
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    IO.observe(el);
});

//AOS JS
AOS.init();

//typed js
var typed = new Typed('#element', {
  strings: ['Brake and Repair Service', 'Engine and Transmission', 'Heating and AC Repairs', 'Engine Upgrades','Tire and Auto Parts'],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});