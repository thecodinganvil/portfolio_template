import { SwiperOptions } from "swiper/types";

export const salimovSlider = {
  portfolio: {
    loop: true,
    navigation: {
      nextEl: ".next-item",
      prevEl: ".prev-item",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: "auto" as const,
        spaceBetween: 0,
      },
      1025: {
        direction: "vertical" as const,
      },
    },
  } as SwiperOptions,
  clients: {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets" as const,
    },
  } as SwiperOptions,
  portfolioItems: {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets" as const,
    },
  } as SwiperOptions,
};
