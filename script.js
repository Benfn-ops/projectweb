// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to section when menu link is clicked
  const menuLinks = document.querySelectorAll("ul.horizontal_list a[href^='#']");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Toggle mobile menu if needed (future enhancement)
  // Example: add class to show/hide menu on small screens
  const toggleMenuButton = document.getElementById("toggle_menu");
  const menuContainer = document.querySelector(".header_menu_container");

  if (toggleMenuButton && menuContainer) {
    toggleMenuButton.addEventListener("click", () => {
      menuContainer.classList.toggle("active");
    });
  }

  // Optional: animate profile picture on hover
  const profilePicture = document.querySelector(".profile_picture");
  if (profilePicture) {
    profilePicture.addEventListener("mouseenter", () => {
      profilePicture.style.transform = "scale(1.1)";
      profilePicture.style.transition = "transform 0.3s ease";
    });

    profilePicture.addEventListener("mouseleave", () => {
      profilePicture.style.transform = "scale(1)";
    });
  }

  // Optional: alert on "Send Message" click
  const sendMessageBtn = document.querySelector(".send_message_button");
  if (sendMessageBtn) {
    sendMessageBtn.addEventListener("click", () => {
      alert("Fitur kirim pesan belum tersedia.");
    });
  }
});
