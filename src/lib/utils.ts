"use client";

// Extend Window interface to include jQuery and plugins
declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    WOW: {
      new (): {
        init: () => void;
      };
    };
  }
  
  interface JQuery {
    mCustomScrollbar: (options?: object | string, ...args: unknown[]) => JQuery;
  }
}

export const jqueryFunction = () => {
  if (typeof window === "undefined") return;
  
  // Wait for jQuery to be available
  const waitForJQuery = () => {
    return new Promise<void>((resolve) => {
      const checkJQuery = () => {
        if (typeof window.$ !== "undefined" && typeof window.$.fn.mCustomScrollbar !== "undefined") {
          resolve();
        } else {
          setTimeout(checkJQuery, 100);
        }
      };
      checkJQuery();
    });
  };
  
  const initializeScrollbar = async () => {
    await waitForJQuery();
    
    const $ = window.$;
    
    /* ----------------------------------------------------------- */
    /*  PAGE PRELOADER
    /* ----------------------------------------------------------- */

    const preloader = $("#preloader");
    setTimeout(function () {
      preloader.addClass("preloaded");
    }, 800);
    
    if ($(window).width()! > 1024) {
      setTimeout(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1500);
      setTimeout(function () {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 2200);
    } else {
      setTimeout(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1100);
      setTimeout(function () {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 1800);
    }

    /* ----------------------------------------------------------- */
    /*  SET ACTIVE MENU ITEM ON SCROLL
    /* ----------------------------------------------------------- */

    const homewidth = $(".home").width()! - 10;
    const aboutwidth = homewidth + ($(".about").width() || 0) + ($(".facts").width() || 0) - 10;
    const portfoliowidth =
      aboutwidth +
      ($(".portfolio .single-item .main-content").width() || 0) +
      ($(".portfolio .single-item .details").width() || 0) +
      250 +
      65 +
      300 +
      ($(".clients").width() || 0) -
      10;
    const contactwidth =
      portfoliowidth + ($(".contact").width() || 0) + ($(".testimonials").width() || 0) - 10;
    const blogwidth =
      contactwidth + ($(".blog").width() || 0) + ($(".copyright").width() || 0) - 10;

    /* ----------------------------------------------------------- */
    /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
    /* ----------------------------------------------------------- */

    function animateContent() {
      const divWidth = $("#wrapper").width()! - $(window).width()! / 2 + 270;
      const animated = $(".animated-layer");
      animated.each(function (this: HTMLElement) {
        const anim = $(this);
        const offset = $(this).offset()?.left || 0;
        if (offset < divWidth) {
          // Image Reveal Animation
          if (anim.hasClass("image-animation")) {
            anim.addClass("animated");
          }
          // Fade In Up Animation
          else if (anim.hasClass("fade-in-up-animation")) {
            anim.addClass("animated fadeInUp");
          }
          // Fade In Animation
          else if (anim.hasClass("fade-in-animation")) {
            anim.addClass("animated fadeIn");
          }
          // Fade In Down Animation
          else if (anim.hasClass("fade-in-down-animation")) {
            anim.addClass("animated fadeInDown");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-right-animation")) {
            anim.addClass("animated fadeInRight");
          }
          // Fade In Left Animation
          else if (anim.hasClass("fade-in-left-animation")) {
            anim.addClass("animated fadeInLeft");
          }
        }
      });
    }

    function checkScroll() {
      const leftPos = Math.abs(parseInt($(".mCSB_container").css("left") || "0"));
      if (leftPos > homewidth && leftPos < aboutwidth) {
        $(".menu ul li span").removeClass("active");
        $("#about-link").addClass("active");
      } else if (leftPos > aboutwidth && leftPos < portfoliowidth) {
        $(".menu ul li span").removeClass("active");
        $("#portfolio-link").addClass("active");
      } else if (leftPos > portfoliowidth && leftPos < contactwidth) {
        $(".menu ul li span").removeClass("active");
        $("#contact-link").addClass("active");
      } else if (leftPos > contactwidth && leftPos < blogwidth) {
        $(".menu ul li span").removeClass("active");
        $("#blog-link").addClass("active");
      } else {
        $(".menu ul li span").removeClass("active");
        $("#home-link").addClass("active");
      }
    }

    if ($("#wrapper").length) {
      if ($(window).width()! > 1024) {
        $("#wrapper").mCustomScrollbar({
          axis: "x",
          theme: "dark-3",
          keyboard: { enable: true, scrollType: "stepless" },
          advanced: {
            autoExpandHorizontalScroll: true,
          },
          mouseWheel: {
            scrollAmount: 400,
          },
          callbacks: {
            whileScrolling: function () {
              animateContent();
              checkScroll();
            },
          },
        });
      } else {
        if (typeof window.WOW !== "undefined") {
          new window.WOW().init();
        }
      }
    }

    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      $("body").addClass("body-safari");
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
    /* ----------------------------------------------------------- */

    $("a[href='#']").on("click", function (e: Event) {
      e.preventDefault();
    });

    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }

    $("#menu li a").on("click", function () {
      setTimeout(() => {
        removeHash();
      }, 5);
    });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */

    if ($(window).width()! > 1024) {
      $(".fadeIn").removeClass("fadeIn");
      $(".fadeInUp").removeClass("fadeInUp");
      $(".fadeInDown").removeClass("fadeInDown");
      $(".fadeInRight").removeClass("fadeInRight");
      $(".fadeInLeft").removeClass("fadeInLeft");
    }

    /* ----------------------------------------------------------- */
    /*  MENU LINKS
    /* ----------------------------------------------------------- */

    $(".menu ul li span").on("click", function (this: HTMLElement) {
      const self = this;
      setTimeout(function () {
        $(self).toggleClass("active");
      }, 1600);
    });

    $("#home-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#home", {
        scrollInertia: 1500,
      });
    });

    $("#about-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
        scrollInertia: 1500,
      });
    });

    $("#portfolio-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#portfolio", {
        scrollInertia: 1500,
      });
    });

    $("#contact-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#contact", {
        scrollInertia: 1500,
      });
    });

    $("#blog-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#blog", {
        scrollInertia: 1500,
      });
    });

    $("#menu li a").on("click", function () {
      $("#checkboxmenu").trigger("click");
      $("body").toggleClass("overflow-hidden");
    });

    $("#menuToggle").on("click", function () {
      $("body").toggleClass("overflow-hidden");
    });

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */

    $("#cta").on("click", function () {
      if ($(window).width()! > 1024) {
        $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
          scrollInertia: 1500,
        });
      } else {
        $("html, body").animate({
          scrollTop: $("#my-photo").offset()?.top,
        });
      }
    });
  };
  
  initializeScrollbar().catch(console.error);
};
