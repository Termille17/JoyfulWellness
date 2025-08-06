// Handle Navbar Hide/Show on Scroll
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

// Menu Button (Mobile)
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");

// Handle the visibility of the menu buttons based on the screen width
const handleMenuVisibility = () => {
  const isMobile = window.innerWidth <= 768; // 768px is typical for mobile

  if (isMobile) {
    // Show the menu button on mobile
    menuToggle.style.display = "block";
    closeMenu.style.display = "none"; // Hide close button by default on mobile
  } else {
    // Hide the menu button and close button on desktop
    menuToggle.style.display = "none";
    closeMenu.style.display = "none";
  }
};

// Toggle Menu Open and Close
menuToggle.addEventListener("click", () => {
  navLinks.classList.add("show");
  menuToggle.style.display = "none"; // Hide menu button
  closeMenu.style.display = "block"; // Show close button
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
  closeMenu.style.display = "none"; // Hide close button
  menuToggle.style.display = "block"; // Show menu button
});

// Close menu when a link is clicked
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    closeMenu.style.display = "none"; // Hide close button
    menuToggle.style.display = "block"; // Show menu button
  });
});

// Run handleMenuVisibility on window load and resize
window.addEventListener("load", handleMenuVisibility);
window.addEventListener("resize", handleMenuVisibility);

// Blog Carousel Script (unchanged from your code)
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

// Form Submit Alert
const form = document.querySelector(".header__form form");
form.addEventListener("submit", function () {
  alert("Your booking has been sent. Thank you!");
});

// Mobile Swiper (unchanged from your code)
function initMobileSwiper() {
  const isMobile = window.innerWidth <= 768;
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
