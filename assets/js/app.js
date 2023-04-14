const openSidebar = document.querySelector(".open-button");
const closeButton = document.querySelectorAll(".close-button");
const header = document.querySelector("header")
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar a");
const sidebarRight = document.querySelector(".sidebar-right")
const modal = document.querySelector(".modal")

// open sidebar mobile
openSidebar.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

// close button
closeButton.forEach((close) => {
  close.addEventListener("click", () => {
    // close sidebar and sidebar contact
    if(sidebarRight.classList.contains("show-sidebar")) {
      sidebarRight.classList.remove("show-sidebar");
    } else {
      sidebar.classList.remove("show-sidebar");
    };
  });
  // if the screen size is bigger than 992px close button now close the modal
  if(window.innerWidth >= 992) {
    close.addEventListener("click", () => {
      modal.style.visibility = "hidden";
    });
  };
});

// close sidebar when click on a link except the contact link
sidebarLinks.forEach((links) => {
  links.addEventListener("click", (event) => {
    if(links.classList.contains("contact")) {
      event.preventDefault();
      sidebarRight.classList.add("show-sidebar");
    } else {
      sidebar.classList.remove("show-sidebar");
    };
  });
});

// fixed navbar when scrolling
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    navbar.classList.add("nav-fixed");
    // if screen size is smaller than 992px aplly a shadow box style on header
    if(window.innerWidth <= 992) {
      header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    };
  } else {
    navbar.classList.remove("nav-fixed");
    header.style.boxShadow = "none";
  };
});

// fixe the navbar covering section title when scrolling
navbarLinks.forEach((links) => {
  links.addEventListener("click", (event) => {
    event.preventDefault();

    // if a link contains contact class open the modal
    if(links.classList.contains("contact")) {
      modal.style.visibility = "visible";
    } else {
      const linksId = links.getAttribute("href");
      const nav = document.querySelector(linksId);
  
      window.scrollTo({
        top: nav.offsetTop - navbar.offsetHeight - 10,
        behavior: "smooth",
      });
    };
  });
});
