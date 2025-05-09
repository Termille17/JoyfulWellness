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
   