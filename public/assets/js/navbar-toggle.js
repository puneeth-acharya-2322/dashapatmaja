document.addEventListener("DOMContentLoaded", function () {
  const submenuTogglers = document.querySelectorAll(".submenu-taggler");

  submenuTogglers.forEach((toggler) => {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event from bubbling to body (which might close menus)
      
      const submenu = this.nextElementSibling;
      if (submenu) {
        // Toggle mobile visibility for modern submenu
        submenu.classList.toggle("hidden");
        submenu.classList.toggle("submenu-open"); // Force open with custom class
        
        // Toggle parent active state
        this.parentElement.classList.toggle("active");
        
        // Rotate the arrow icon
        const arrow = toggler.querySelector("svg");
        if (arrow) {
            arrow.classList.toggle("rotate-180");
        }

        // Close other open submenus
        submenuTogglers.forEach((otherToggler) => {
             if (otherToggler !== toggler) {
                 const otherSubmenu = otherToggler.nextElementSibling;
                 if (otherSubmenu) {
                     otherSubmenu.classList.add("hidden");
                     otherSubmenu.classList.remove("submenu-open");
                     otherToggler.parentElement.classList.remove("active");
                     
                     // Reset other arrows
                     const otherArrow = otherToggler.querySelector("svg");
                     if (otherArrow) {
                         otherArrow.classList.remove("rotate-180");
                     }
                 }
             }
        });
      }
    });
  });

  // Close menus when clicking outside (mobile only)
  document.addEventListener("click", function (e) {
      // Only close if not clicking on submenu or toggler
      if (!e.target.closest('.submenu-item')) {
          document.querySelectorAll(".submenu-modern").forEach((submenu) => {
              submenu.classList.add("hidden");
              submenu.classList.remove("submenu-open");
          });
          document.querySelectorAll(".submenu-item").forEach((item) => {
              item.classList.remove("active");
          });
          document.querySelectorAll(".submenu-taggler svg").forEach((arrow) => {
              arrow.classList.remove("rotate-180");
          });
      }
  });
});
