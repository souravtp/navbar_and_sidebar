// const body = document.querySelector("body");
// const darkLight = document.querySelector("#darkLight");

// required
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
// const sidebarOpen = document.querySelector("#sidebarOpen");
// const sidebarClose = document.querySelector(".collapse_sidebar");
// const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

// sidebarClose.addEventListener("click", () => {
//   sidebar.classList.add("close", "hoverable");
// });
// sidebarExpand.addEventListener("click", () => {
//   sidebar.classList.remove("close", "hoverable");
// });

// sidebar.addEventListener("mouseenter", () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.remove("close");
//   }
// });
// sidebar.addEventListener("mouseleave", () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.add("close");
//   }
// });

// darkLight.addEventListener("click", () => {
//   body.classList.toggle("dark");
//   if (body.classList.contains("dark")) {
//     document.setI
//     darkLight.classList.replace("bx-sun", "bx-moon");
//   } else {
//     darkLight.classList.replace("bx-moon", "bx-sun");
//   }
// });

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

// if (window.innerWidth < 768) {
//   sidebar.classList.add("close");
// } else {
//   sidebar.classList.remove("close");
// }

const navItems = document.querySelectorAll('.nav_link');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


const navSubLinks = document.querySelectorAll('.sublink');

navSubLinks.forEach(item => {
  item.addEventListener('click', function() {
    navSubLinks.forEach(i => i.classList.remove('bold'));
    this.classList.add('bold');
  });
});