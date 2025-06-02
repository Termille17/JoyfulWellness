// script.js
let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add("hide");
        navbar.classList.remove("show");
      } else {
        // Scrolling up
        navbar.classList.remove("hide");
        navbar.classList.add("show");
      }
    } else {
      // Reset to default at top
      navbar.classList.remove("hide", "show");
    }

    lastScrollY = window.scrollY;
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const closeMenu = document.getElementById("close-menu");
  
  menuToggle.addEventListener("click", () => {
    navLinks.classList.add("show");
    menuToggle.style.display = "none";
    closeMenu.style.display = "block";
  });
  
  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("show");
    closeMenu.style.display = "none";
    menuToggle.style.display = "block";
  });
  
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      closeMenu.style.display = "none";
      menuToggle.style.display = "block";
    });
  });

const blogGrid = document.getElementById('blog-grid');
const blogPosts = document.querySelectorAll('.blog__post');
const postsPerPage = 3;
let currentPage = 0;

const updateCarousel = () => {
  const width = blogPosts[0].offsetWidth + 32; // post width + gap
  const offset = currentPage * postsPerPage * width;
  blogGrid.style.transform = `translateX(-${offset}px)`;
};

document.getElementById('blog-next').addEventListener('click', () => {
  const maxPage = Math.floor(blogPosts.length / postsPerPage) - 1;
  if (currentPage < maxPage) {
    currentPage++;
    updateCarousel();
  }
});

document.getElementById('blog-prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateCarousel();
  }
});

  const form = document.querySelector(".header__form form");
  form.addEventListener("submit", function () {
    alert("Your booking has been sent. Thank you!");
  });

// Smooth scroll for anchor links
  function initMobileSwiper() {
    const isMobile = window.innerWidth <= 780;
    const blogGrid = document.getElementById("blog-grid");

    if (isMobile && !document.querySelector(".swiper-wrapper")) {
      const swiperContainer = document.createElement("div");
      swiperContainer.className = "swiper";

      const swiperWrapper = document.createElement("div");
      swiperWrapper.className = "swiper-wrapper";

      // Convert blog posts into swiper slides
      const posts = Array.from(blogGrid.children);
      posts.forEach(post => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.appendChild(post);
        swiperWrapper.appendChild(slide);
      });

      swiperContainer.appendChild(swiperWrapper);

      // Optional controls
      swiperContainer.innerHTML += `
        <div class="swiper-pagination"></div>
      `;

      // Replace grid with swiper
      blogGrid.parentNode.replaceChild(swiperContainer, blogGrid);

      new Swiper(".swiper", {
        slidesPerView: 1.1,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }

  // Run on load
  window.addEventListener("load", initMobileSwiper);
  // Optional: Run again on resize
  window.addEventListener("resize", () => {
    location.reload(); // You can improve this to reset only if needed
  });
